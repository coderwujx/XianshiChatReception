/**
 * 格式化时间
 * @param {Date} date - 传入的时间，格式为 new Date()
 * @returns {string} - 格式化后的时间字符串
 */
export function formatTime(date) {
	const now = new Date(); // 当前时间
	const targetTime = new Date(date); // 目标时间，确保传入的是 Date 对象

	// 获取日期的年、月、日
	const nowYear = now.getFullYear();
	const nowMonth = now.getMonth();
	const nowDate = now.getDate();
	const targetYear = targetTime.getFullYear();
	const targetMonth = targetTime.getMonth();
	const targetDate = targetTime.getDate();

	// 判断是否是当天
	if (
		targetYear === nowYear &&
		targetMonth === nowMonth &&
		targetDate === nowDate
	) {
		// 当天：显示 hh:mm
		return targetTime.toLocaleTimeString('zh-CN', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false, // 24小时制
		});
	}

	// 判断是否是昨天
	const yesterday = new Date(now);
	yesterday.setDate(nowDate - 1); // 前一天的时间
	if (
		targetYear === yesterday.getFullYear() &&
		targetMonth === yesterday.getMonth() &&
		targetDate === yesterday.getDate()
	) {
		// 昨天：显示 "昨天 hh:mm"
		return `昨天 ${targetTime.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // 24小时制
    })}`;
	}

	// 大于昨天：显示 YY/MM/DD
	return `${targetYear}/${String(targetMonth + 1).padStart(2, '0')}/${String(
    targetDate
  ).padStart(2, '0')}`;
}