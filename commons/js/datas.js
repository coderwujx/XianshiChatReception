// 数据模拟
export default {
	friends: function() {
		// 定义一个包含多个朋友信息的数组
		const friends_array = [{
				id: 1, // 朋友的唯一标识
				imgurl: 'four.png', // 朋友的头像图片路径
				tip: 2, // 未读消息数量
				name: '小黑子', // 朋友的昵称
				time: new Date(new Date().setDate(new Date().getDate() - 1)), // 最后一条消息的时间
				messages: '你干嘛！哎哟！' // 最后一条消息的内容
			},
			{
				id: 2,
				imgurl: 'four.png',
				tip: 1,
				name: '大白子',
				time: new Date(new Date().setDate(new Date().getDate() - 2)),
				messages: '今天天气真好！'
			},
			{
				id: 3,
				imgurl: 'four.png',
				tip: 0, // 0 表示没有未读消息
				name: '小绿子',
				time: new Date(new Date().setDate(new Date().getDate() - 3)),
				messages: '一起去吃火锅吧！'
			},
			{
				id: 4,
				imgurl: 'four.png',
				tip: 3,
				name: '小红子',
				time: new Date(),
				messages: '晚上去看电影吗？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 6,
				imgurl: 'four.png',
				tip: 1,
				name: '小黄子',
				time: new Date(),
				messages: '周末一起去爬山吧！'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},
			{
				id: 5,
				imgurl: 'four.png',
				tip: 0,
				name: '小蓝子',
				time: new Date(),
				messages: '最近有什么好玩的游戏推荐吗？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？你干嘛？'
			},

		];
		// 返回包含朋友信息的数组
		return friends_array
	}
}