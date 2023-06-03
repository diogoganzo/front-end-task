export const actions = {
    async getRules() {
        console.log('here');
      let res = await this.$axios.get('/house_rules')
      return res;
    }
  }