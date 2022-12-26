<script>
import Header from "../../components/Header/Header.vue";
import { UserWrapper, PostsWrapper, Container, Post } from "./Posts.js";
import api from "../../services/api";
export default {
  components: {
    Header,
    UserWrapper,
    Container,
    PostsWrapper,
    Post,
  },
  data() {
    return {
      active: "posts",
      users: [],
      activeUser: [],
      userPosts: [],
      selectedPost: [],
      hasActiveUser: false,
      editMode: false,
      addMode: false,
      addForm: {
        id: Math.random(),
        title: "",
        body: "",
      },
    };
  },
  methods: {
    async getUsers() {
      try {
        this.users = await api.getUsers();
      } catch (err) {
        console.log(err);
      }
    },
    async getUserPosts(userId) {
      try {
        this.userPosts = await api.getUserPosts(userId);
      } catch (err) {
        console.log(err);
      }
    },
    changeActiveUser(user) {
      this.activeUser = user;
      this.hasActiveUser = true;
      this.getUserPosts(user.id);
      return this.activeUser;
    },
    openEditModeAdd() {
      this.editMode = false;
      this.addMode = true;
      return (this.add = true);
    },
    openEditMode(post) {
      this.addMode = false;
      this.editMode = true;
      this.selectedPost = post;
      return (this.selectedPost = post);
    },
    deletePost(post) {
      const filteredPosts = this.userPosts.filter((userPost) => {
        return userPost.id !== post.id;
      });
      this.userPosts = filteredPosts;
    },

    addPost() {
      this.userPosts.push({
        id: this.addForm.id,
        name: this.addForm.title,
        body: this.addForm.body,
      });
      this.addMode = false;
    },
    editPost() {
      for (var i = 0; i < this.userPosts.length; i++) {
        if (this.userPosts[i].id == this.selectedPost.id) {
          this.userPosts[i].name = this.selectedPost.name;
          this.userPosts[i].body = this.selectedPost.body;
          this.editMode = false;
          this.addMode = false;
        }
      }
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
      <div class="column-1">
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
        <PostsWrapper>
          <div class="title">
            <div>Posts</div>
          </div>
          <div class="content-container">
            <div
              class="icon btn-add"
              v-on:click="openEditModeAdd()"
              v-if="userPosts.length"
            >
              <div>Adicionar post</div>
              <div>
                <b-icon icon="plus-circle"></b-icon>
              </div>
            </div>
            <Post v-if="userPosts" v-for="post in userPosts">
              {{ post.name }}
              <div class="actions">
                <div class="item">
                  <b-icon
                    icon="pen-fill"
                    v-on:click="openEditMode(post)"
                  ></b-icon>
                </div>

                <div class="item">
                  <b-icon
                    icon="trash-fill"
                    v-on:click="deletePost(post)"
                  ></b-icon>
                </div>
              </div>
            </Post>
          </div>
        </PostsWrapper>
      </div>

      <div class="column-2" v-if="addMode">
        <PostsWrapper>
          <div class="title">Adicionar Post</div>
          <div class="content-container">
            <form id="addForm">
              <input
                type="text"
                id="fname"
                name="fname"
                class="input-add-title"
                v-model="addForm.title"
                @input="(event) => (text = event.target.value)"
                placeholder="Title..."
              /><br />
              <textarea
                type="text"
                id="lname"
                name="lname"
                class="input-add-body"
                v-model="addForm.body"
                @input="(event) => (text = event.target.value)"
                placeholder="Post text..."
              />
              <div>
                <button type="button" v-on:click="addPost" class="btn-save">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </PostsWrapper>
      </div>

      <div class="column-2" v-if="editMode">
        <PostsWrapper>
          <div class="title">Editar Post</div>
          <div class="content-container">
            <form id="editForm">
              <input
                type="text"
                id="fname"
                name="fname"
                class="input-add-title"
                v-model="selectedPost.name"
                @input="(event) => (text = event.target.value)"
                placeholder="Title..."
              /><br />
              <textarea
                type="text"
                id="lname"
                name="lname"
                class="input-add-body"
                v-model="selectedPost.body"
                @input="(event) => (text = event.target.value)"
                placeholder="Post text..."
              />
              <div>
                <button type="button" v-on:click="editPost" class="btn-save">
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </PostsWrapper>
      </div>
    </Container>
  </div>
</template>
