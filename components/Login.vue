<template>
  <div class="login-wrap">
	  <div class="login-box">
		  <h5>请登录</h5>
		  <input type="text" placeholder="用户名" name="loginno" v-model="loginno">
		  <input type="password" placeholder="用户密码" name="loginpassword" v-model="loginpassword">
		  <button v-on:click="checklogin">登录</button>
	  </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
			loginno:"",
			loginpassword:""
		}
	},
	methods: {
		checklogin() {
			// if(this.loginno != "zyt"){
			// 	console.log("用户名错误");
			// 	return;
			// };
			// if(this.loginpassword != "zyt"){
			// 	console.log("用户密码错误");
			// 	return;
			// }
      localStorage.setItem("isLogin","t");
      //修改选中菜单
      this.$store.commit('changeSelectedmenucode',"001");
			this.$router.push({name:"home"});
		}
	}
}
</script>

<style scoped>
.login-wrap{
	width:100%;
	height:100vh;
	background-color: #000;
  background-image:url(../image/kobe24.jpg);
  background-repeat:no-repeat;
  background-position: center;
  background-size:contain;
  /* background-size:cover; */
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
}
.login-box{
	width:300px;
	height:auto;
	box-shadow: 2px 2px 15px #ebeff0;
	padding-bottom:30px;
	overflow:hidden;
	position:fixed;
	/* top:25%;
	right:15%; */
  top:2%;
  left:1%;
	background-color: #fff;
	border-radius:2px;
	font-family: "微软雅黑";
}
.login-box>h5{
	display:block;
	width:80%;
	height:35px;
	margin:20px auto 0px;
	text-align: center;
	font-weight: normal;
	font-size: 20px;
}
.login-box>input,.login-box>button{
	display:block;
	width:80%;
	height:35px;
	margin:30px auto 0px;
	border:1px solid #263846;
	outline:none;
	text-indent:2px;
	border-radius:2px;
}
.login-box>button{
	background: #263846;
	color:#fff;
	font-size:16px;
	cursor: pointer;
}
</style>
