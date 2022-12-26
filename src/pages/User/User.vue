<script>
import Header from "../../components/Header/Header.vue";
import { UserWrapper, UserData, Container } from "./User.js";
import api from "../../services/api";

export default {
  components: { Header, UserWrapper, Container, UserData },
  data() {
    return {
      active: "user",
      users: [],
      activeUser: { address: {} },
      hasActiveUser: false,
    };
  },
  props: {},
  methods: {
    getUsers() {
      try {
        const response = api.getUsers().then((data) => {
          return (this.users = data);
        });
      } catch (err) {
        console.log(err);
      }
    },
    changeActiveUser(user) {
      this.activeUser = user;
      this.hasActiveUser = true;
      return this.activeUser;
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>

<template>
  <div>
    <Header
      title="Post-List"
      :items="['Posts', 'User']"
      :activePage="this.active"
    ></Header>
    <Container>
      <UserWrapper>
        <b-dropdown
          id="dropdown-1"
          :text="this.hasActiveUser ? activeUser.name : 'Selecionar usuário'"
          variant="transparent"
          class="user-wrapper"
        >
          <b-dropdown-item
            v-for="user in users"
            v-on:click="changeActiveUser(user)"
          >
            {{ user.name }}
          </b-dropdown-item>
        </b-dropdown>
      </UserWrapper>
      <UserData>
        <div class="item">
          Name
          <input type="text" v-model="activeUser.name" disabled />
        </div>
        <div class="item">
          Username
          <input type="text" v-model="activeUser.username" disabled />
        </div>
        <div class="item">
          Email
          <input type="text" v-model="activeUser.email" disabled />
        </div>
        <div class="item">
          Phone
          <input type="text" v-model="activeUser.phone" disabled />
        </div>
        <div class="item">
          Street
          <input type="text" v-model="activeUser.address.street" disabled />
        </div>
        <div class="item">
          City
          <input type="text" v-model="activeUser.address.city" disabled />
        </div>
      </UserData>
    </Container>
  </div>
</template>
