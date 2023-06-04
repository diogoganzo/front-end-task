export const actions = {
    async getRules(state, page) {
      let res = await this.$axios.get(`/house_rules?page=${page}`)
      return res;
    },
    async deleteRule(state, id) {
      let res = await this.$axios.delete(`/house_rules/${id}`)
      return res;
    }
  }