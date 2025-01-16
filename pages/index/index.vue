<template>
	<view class="content">
		<!-- 固定的状态栏 -->
		<view class="status-bar" />
		<wd-transition :show="true" name="fade-left">
			<!-- 固定的顶部栏 -->
			<TopBar :leftImageSrc="'/static/images/img/four.png'" />
			<!-- 内容区域 -->
			<scroll-view class="scroll-content" scroll-y>
				<FriendList :MessageName="'好友申请'" :ListImageSrc="'/static/images/img/apply.png'" />
				<FriendList v-for="(item, index) in datas.friends()" :key="index"
					:ListImageSrc="'/static/images/img/' + item.imgurl" :MessageTip="item.tip" :MessageName="item.name"
					:MessageTime="formatTime(item.time)" :MessageContent="item.messages" />
			</scroll-view>
		</wd-transition>

	</view>
</template>

<script setup>
	import TopBar from '../../components/index/TopBar.vue';
	import FriendList from '../../components/index/FriendList.vue';
	import datas from '../../commons/js/datas.js';
	import {
		formatTime
	} from '../../commons/js/utils.js';
</script>

<style lang="scss">
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	/* 固定的状态栏 */
	.status-bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #ffffff;
		/* 状态栏背景色 */
	}

	/* 内容区域 */
	.scroll-content {
		flex: 1;
		padding-top: 100rpx;
		/* 顶部栏高度 + 状态栏高度 */
		box-sizing: border-box;
		overflow-y: auto;
		/* 启用原生滚动 */
	}
</style>