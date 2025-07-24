import achievementsData from "@/services/mockData/achievements.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const achievementsApi = {
  async getAll() {
    await delay(300);
    return [...achievementsData];
  },

  async getById(id) {
    await delay(200);
    const achievement = achievementsData.find(item => item.Id === parseInt(id));
    if (!achievement) {
      throw new Error("Achievement not found");
    }
    return { ...achievement };
  },

  async create(achievementData) {
    await delay(400);
    const maxId = Math.max(...achievementsData.map(item => item.Id), 0);
    const newAchievement = {
      Id: maxId + 1,
      ...achievementData
    };
    achievementsData.push(newAchievement);
    return { ...newAchievement };
  },

  async update(id, updateData) {
    await delay(350);
    const index = achievementsData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Achievement not found");
    }
    achievementsData[index] = { ...achievementsData[index], ...updateData };
    return { ...achievementsData[index] };
  },

  async delete(id) {
    await delay(250);
    const index = achievementsData.findIndex(item => item.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Achievement not found");
    }
    const deleted = achievementsData.splice(index, 1)[0];
    return { ...deleted };
  }
};