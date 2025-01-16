<template>
	<view class="register-content">
		<!-- 标题部分 -->
		<wd-text :bold="true" size="60rpx" text="贤时即聊" color="blue" />
		<view class="from">
			<!-- 注册标题和欢迎语 -->
			<view class="register-text">
				<wd-text :bold="true" size="60rpx" text="注册" color="black" />
			</view>
			<!-- 表单部分 -->
			<view class="data">
				<!-- 用户名输入框 -->
				<wd-input prefix-icon="user-circle" type="text" v-model="NameValue" placeholder="请输入用户名"
					:showWordLimit="true" :maxlength="15" @input="handleInput" />
				<!-- 邮箱输入框 -->
				<wd-input prefix-icon="mail" type="text" v-model="MailValue" placeholder="请输入邮箱" :showWordLimit="true"
					:maxlength="15" @input="handleInput" />
				<!-- 密码输入框 -->
				<wd-input prefix-icon="keywords" type="text" show-password v-model="PasswordValue" placeholder="请输入密码"
					:showWordLimit="true" :maxlength="18" @input="handleInput" />
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
	const MailValue = ref(''); // 邮箱输入框的值
	const PasswordValue = ref(''); // 密码输入框的值

	// 计算属性：判断按钮是否禁用
	const isButtonDisabled = computed(() => {
		return (
			NameValue.value.length === 0 || // 用户名为空
			MailValue.value.length === 0 || // 邮箱为空
			PasswordValue.value.length === 0 || // 密码为空
			NameValue.value.length < 5 || // 用户名长度小于 5
			PasswordValue.value.length < 5 // 密码长度小于 5
		);
	});

	// 校验输入内容是否为数字和字母
	const validateInput = (value) => {
		return /^[A-Za-z0-9]*$/.test(value); // 正则表达式：只允许数字和字母
	};

	// 校验邮箱格式
	const validateEmail = (email) => {
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的邮箱格式验证
		return emailPattern.test(email);
	};

	// 使用弹窗
	const message = useMessage();

	// 处理输入框输入事件
	const handleInput = () => {
		if (!validateInput(NameValue.value) || !validateInput(PasswordValue.value)) {
			// 用户名或密码格式不正确
			message.alert({
				msg: "用户名或密码只能是数字或字母",
				title: "输入错误!"
			});
			// 清空数据
			NameValue.value = "";
			PasswordValue.value = "";
		}
	};

	// 处理登录按钮点击事件
	const handleLogin = () => {
		// 验证邮箱格式
		if (!validateEmail(MailValue.value)) {
			message.alert({
				msg: "邮箱格式不正确，请输入有效的邮箱地址",
				title: "邮箱错误!"
			});
			// 清空邮箱
			MailValue.value = "";
			return; // 终止函数执行
		}

		// 打印用户名、邮箱和密码的值
		console.log('用户名:', NameValue.value);
		console.log('邮箱:', MailValue.value);
		console.log('密码:', PasswordValue.value);

		// 清空数据
		NameValue.value = "";
		MailValue.value = "";
		PasswordValue.value = "";

		// 这里可以添加注册逻辑，例如调用注册接口
	};
</script>

<style lang="scss">
	.register-content {
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

			.register-text {
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