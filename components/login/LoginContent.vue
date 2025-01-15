<template>
	<view class="login-content">
		<!-- 标题部分 -->
		<wd-text :bold="true" size="60rpx" text="贤时即聊" color="blue" />
		<view class="from">
			<!-- 登录标题和欢迎语 -->
			<view class="login-text">
				<wd-text :bold="true" size="60rpx" text="登录" color="black" />
				<wd-text size="45rpx" text="您好,欢迎来到贤时即聊!!" />
			</view>
			<!-- 表单部分 -->
			<view class="data">
				<!-- 用户名输入框 -->
				<wd-input prefix-icon="user-circle" type="text" v-model="NameValue" placeholder="请输入用户名"
					:showWordLimit="true" :maxlength="15" @input="handleInput" />
				<!-- 密码输入框 -->
				<wd-input prefix-icon="user-circle" type="text" show-password v-model="PasswordValue"
					placeholder="请输入密码" :showWordLimit="true" :maxlength="18" @input="handleInput" />
				<!-- 登录按钮 -->
				<view class=" button">
					<wd-message-box />
					<wd-button block size="medium" @click="handleLogin" :disabled="isButtonDisabled">登录</wd-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		useMessage
	} from "@/uni_modules/wot-design-uni"

	// 定义响应式变量
	const NameValue = ref(''); // 用户名输入框的值
	const PasswordValue = ref(''); // 密码输入框的值

	// 计算属性：判断按钮是否禁用
	const isButtonDisabled = computed(() => {
		return (
			NameValue.value.length === 0 || // 用户名为空
			PasswordValue.value.length === 0 || // 密码为空
			NameValue.value.length < 5 || // 用户名长度小于等于 5
			PasswordValue.value.length < 5 // 密码长度小于等于 5
		);
	});

	// 校验输入内容是否为数字和字母
	const validateInput = (value) => {
		return /^[A-Za-z0-9]*$/.test(value); // 正则表达式：只允许数字和字母
	};

	//使用弹窗
	const message = useMessage();

	// 处理输入框输入事件
	const handleInput = () => {
		if (!validateInput(NameValue.value) || !validateInput(PasswordValue.value)) {
			//不匹配格式
			message.alert({
				msg: "用户名或密码只能时数字或者时字母",
				title: "输入错误!"
			})
			//清空数据
			NameValue.value = ""
			PasswordValue.value = ""
		}
	};

	// 处理登录按钮点击事件
	const handleLogin = () => {
		// 打印用户名和密码的值
		console.log('用户名:', NameValue.value);
		console.log('密码:', PasswordValue.value);
		//清空数据
		NameValue.value = ""
		PasswordValue.value = ""
		// 在这里添加登录逻辑
		// 例如：调用登录接口，验证用户名和密码
		// if (NameValue.value && PasswordValue.value) {
		//   // 调用登录接口
		//   loginApi({ username: NameValue.value, password: PasswordValue.value })
		//     .then(response => {
		//       console.log('登录成功:', response);
		//     })
		//     .catch(error => {
		//       console.error('登录失败:', error);
		//     });
		// } else {
		//   console.log('用户名或密码不能为空');
		// }
	};
</script>

<style lang="scss">
	.login-content {
		width: 100%;
		display: flex;
		box-sizing: border-box;
		padding-top: 170rpx;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.from {
			width: 100%;
			padding-top: 100rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			.login-text {
				width: 80%;
				display: flex;
				flex-direction: column;
			}

			.data {
				width: 80%;
				padding-top: 100rpx;

				.button {
					width: 100%;
					padding-top: 40rpx;
				}
			}
		}
	}
</style>