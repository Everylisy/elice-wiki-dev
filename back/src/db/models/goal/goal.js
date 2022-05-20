import models, { Sequelize } from "../index";

const Op = Sequelize.Op;

class goalModel {
    static async insert({ newGoal }) {
        // 주차별 목표를 입력
        try {
            await models.Goal.create(newGoal);
            return {
                status: "succ",
                payload: "데이터 입력 성공!",
            };
        } catch (error) {
            if (error) {
                return {
                    status: "failed",
                    message: "데이터 입력에 실패했습니다.",
                };
            }
        }
    }
}

export { goalModel };