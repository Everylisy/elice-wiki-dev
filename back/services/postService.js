import { postModel } from "../db/models/post/post";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

class postService {
  // 값 req에서 받아와 추가 하기
  // tag 여러개 가져오는 방법은 프론트와 함께 얘기해봐야 함 #tag 이런식??
  // date는 createdAt을 사용해도 괜찮지 않을까..
  static async addPost({ userId, week, tag, title, body }) {
    // body에서 받은 text를 md파일로 저장
    // TODO: const savePath = '../../front/post' -> 저장하게될 예상 경로
    const nowDate = new Date();
    const year = nowDate.getUTCFullYear();

    // 월과 일은 2자리가 아닌경우 앞에 0을 붙여줌
    const month =
      nowDate.getUTCMonth().toString().length !== 2
        ? `0${nowDate.getUTCMonth()}`
        : nowDate.getUTCMonth();

    const day =
      nowDate.getUTCDate().toString().length !== 2
        ? `0${nowDate.getUTCDate()}`
        : nowDate.getUTCDate();

    const date = `${year}.${month}.${day}`;
    console.log(date);

    const postId = uuidv4();

    // 테스트 경로
    const savePath = "../_post";
    // postId는 라우팅 경로로 사용될 수 있으므로 shortId로 만드는 것도 괜찮을 듯
    fs.writeFile(
      `${year}-${month}-${day}-${postId}.md`,
      "\ufeff" + body,
      {
        encoding: "utf-8",
      },
      (err, data) => {
        console.log(data);
      }
    );

    const newPost = { postId, userId, date, week, tag, title };
    const insertedPost = await postModel
      .insertPost({ newPost })
      .then(() => console.log("post created"))
      .catch((err) => console.log(err));

    return insertedPost;
  }

  static async findPostByTag(tag) {
    const getPosts = await postModel.findByTag(tag);
    return getPosts;
  }
}

export { postService };