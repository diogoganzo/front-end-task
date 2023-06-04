<template>
  <v-app dark>
    <v-navigation-drawer rail :clipped="clipped" fixed app width="289px" style="background-color: #f5f5f5;" class="main-navigation">
      <v-row class="fill-height" no-gutters>
        <v-navigation-drawer mini-variant mini-variant-width="100" permanent floating>
          <v-list style="padding-top: 0px">
            <v-list-item-group v-model="selectedItem">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                exact
                color="primary"
                active-class="active"
              >
                <v-list-item-action class="content222">
                  <div class="content"> 
                  <v-icon>{{ item.icon }}</v-icon>
                  {{ item.title }}
                  </div>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <v-list style="padding-top: 0px;" class="px-2">
          <h2> {{ items[selectedItem].title }} </h2>
          <v-list-item
            active-class="active"
            v-for="(item, i) in items[selectedItem].options"
            :key="i"
            exact
            color="primary"
            active
            :to="item.to"
            router
          >
            <v-list-item-content>
              <v-list-item-title class="content">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title>
        <v-img
          src="https://panel.searchandstay.com/images/logo.png"
          width="250"
        ></v-img>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer  app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: true,
      selectedItem: 0,
      items: [
        {
          icon: "mdi-list-status",
          title: "Rules Listing",
          to: "/rules/",
          options: [
            {
              title: "View All",
              to: "/rules/viewall",
            },
            {
              title: "Create New",
              to: "/rules/viewall",
              to: "/rules/new",
            },
          ],
        },
        {
          icon: "mdi-account",
          title: "About me",
          options: [
            {
              title: "Resume",
              to: "/aboutme",
            },
          ],
        },
      ],
      rightDrawer: false,
      title: "searchandstay",
    };
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #f5f5f5 !important;
  background-color: #f5f5f5 !important;
  .content {
    color: #fb3b11 !important;
  }

}
::v-deep .v-navigation-drawer__border {
  display: none !important
}
.main-navigation {
  box-shadow: -8px -5px 20px 0 rgba(0,0,0,.2) !important;
  border-right: 5px !important;
}

</style>
