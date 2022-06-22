function profilecard() {
  return {
    username: 'rehhouari',
    fullname: 'Rafik El Hadi Houari',
    bgcolors: ['bg-emerald-500', 'bg-purple-500', 'bg-yellow-500', 'bg-gray-800', 'bg-pink-500'],
    bgcolor: 'bg-dark-800',
    showsettings: false,
    photourl: 'https://avatars.githubusercontent.com/u/78239768?v=4',
    editing: '',
    saveedit(name) {
      this[name] = this.$refs[name+'input'].value;
      this.editing = '';
    },
    edit(name) {
      this.editing = name;
      this.$nextTick(() => {
        this.$refs[name+'input'].focus();
      });
    },
    discard(name) {
      this.$refs[name+'input'].value = this[name];
      this.editing = '';
    },
    selectcolor(color) {
      this.bgcolor = color;
    }
  }
}