// 语料库
const prompts = {
  "累": [
    "累了就休息一下下哦，不要硬撑啦~ (๑•́ ₃ •̀๑)",
    "今天辛苦啦，给你一个大大的抱抱，充电满满！(っ˘ω˘ς)",
    "累的时候记得摸摸自己的小脑袋，告诉自己“我已经很棒啦！”(◍•ᴗ•◍)❤",
    "休息是为了走更远的路，明天又是元气满满的一天呢！(✿◠‿◠)"
  ],
  "难过": [
    "不要难过啦，我会一直陪着你哦~ (｡･ω･｡)ﾉ♡",
    "难过的时候记得抬头看看天空，云朵都在为你加油呢！(๑•̀ㅂ•́)و✧",
    "抱抱你，难过的事情都会过去的，明天会更好哒！(づ｡◕‿‿◕｡)づ",
    "难过的事情都会被风吹走的！(◕‿◕✿)"
  ],
  "死": [
    "不要想那么多啦，活着就是为了遇见更多美好的事情呢！(◍•ᴗ•◍)❤",
    "生命是超级珍贵的礼物，一定要好好珍惜哦~ (｡♥‿♥｡)",
    "未来还有好多惊喜等着你呢！(✿◠‿◠)",
    "一定要好好爱自己哦！(๑•́ ₃ •̀๑)"
  ],
  "开心": [
    "开心的时候就要笑出来哦(◕‿◕✿)",
    "你开心我也开心噢！(๑˃ᴗ˂)ﻭ",
    "开心的事情要记在小本本上，以后翻出来都是甜甜的回忆呢！(｡♥‿♥｡)",
    "一起快乐到冒泡泡吧！(✧ω✧)"
  ],
  "棒": [
    "宇宙第一厉害！(๑•̀ㅂ•́)و✧",
    "棒到发光！(✿◠‿◠)",
    "一定要给自己一个大大的奖励哦！(◍•ᴗ•◍)❤",
    "闪闪发光！(｡♥‿♥｡)"
  ],
  "default": [
    "想吃甜甜的蛋糕，感觉心情会变得更好哦！(๑•́ ₃ •̀๑)",
    "哇哦，今天的云朵好像棉花糖，好想咬一口！(✧ω✧)",
    "小猫咪在晒太阳，我也好想变成一只懒懒的猫呀~ (｡･ω･｡)ﾉ♡",
    "今天的风好温柔，吹在脸上像在说“加油哦！”(っ˘ω˘ς)",
    "偷偷告诉你，我刚刚发现了一朵小花，它也在对我笑呢！(◍•ᴗ•◍)❤",
    "好想和星星做朋友，它们一定有很多有趣的故事吧！(｡♥‿♥｡)",
    "今天的奶茶超级好喝，感觉整个人都被治愈啦！(๑˃ᴗ˂)ﻭ",
    "突然想跳舞，虽然跳得不好，但开心最重要啦！(✿◠‿◠)",
    "好想养一只小狗狗，每天和它一起散步一定超幸福！(◕‿◕✿)",
    "今天的月亮好圆，像一个大大的笑脸呢~ (๑•́ ₃ •̀๑)",
    "突然好想吃火锅(✧ω✧)",
    "今天的阳光暖暖的，像在给我一个大大的拥抱！(っ˘ω˘ς)",
    "好想和好朋友一起去野餐，带上小零食和快乐！(◍•ᴗ•◍)❤",
    "今天的星星特别亮，是不是在偷偷给我加油呢？(｡♥‿♥｡)",
    "突然想画画，虽然画得乱七八糟，但开心就好啦！(๑˃ᴗ˂)ﻭ",
    "好想躺在草地上看云，感觉时间都会变慢呢~ (✿◠‿◠)",
    "今天的冰淇淋超级好吃，感觉整个人都甜甜的！(◕‿◕✿)",
    "今天的阳光洒在身上，感觉整个人都被幸福包围啦，暖暖的~ (っ˘ω˘ς)",
    "突然好想唱歌 (◍•ᴗ•◍)❤",
    "今天的星星特别亮(｡♥‿♥｡)"
  ],
  "哭": [
    "不愿意看见你流眼泪TT ",
    "需要抱抱吗 ( -'`-; )",
    "跟我说说好不好 ( -'`-; )",
  ],
  "我爱你": [
    "我也爱你(๑• . •๑)"
  ],
  "讨厌": [
    "讨厌的事情都走开呀！！(๑•ૅω•´๑)",
    "飞踢！(； ･`д･´)"
  ],
  "我讨厌你": [
    "我喜欢你⁽⁽ ◟(∗ ˊωˋ ∗)◞ ⁾⁾"
  ],
  "爱": [
    "那样真是太好啦(੭ु´ ᐜ `)੭ु⁾⁾",
    "嘿嘿…真好。(๑ ^ ₃•๑)",
    "特别特别好~*｡٩(ˊωˋ*)و✧*｡"
  ]
};
// 获取按钮和弹窗元素
const infoBtn = document.getElementById('info-btn');
const infoModal = document.getElementById('info-modal');
const closeInfoModal = document.getElementById('close-info-modal');

// 点击按钮显示弹窗
infoBtn.addEventListener('click', () => {
  infoModal.style.display = 'block';
});

// 点击关闭按钮隐藏弹窗
closeInfoModal.addEventListener('click', () => {
  infoModal.style.display = 'none';
});

// 点击弹窗外区域也能关闭弹窗
window.addEventListener('click', (e) => {
  if (e.target === infoModal) {
    infoModal.style.display = 'none';
  }
});

//任务管理功能
let tasks = [];
const taskList = document.getElementById('task-list');
const newTaskBtn = document.getElementById('new-task-btn');
const deleteTaskBtn = document.getElementById('delete-task-btn');
deleteTaskBtn.disabled = false;
const taskModal = document.getElementById('task-modal');
const confirmTaskBtn = document.getElementById('confirm-task');
const closeTaskModal = document.getElementById('close-task-modal');

// 新建任务按钮的提示
newTaskBtn.addEventListener('click', () => {
  if (tasks.length >= 8) {
    showCustomAlert("会累坏的呀！！(●ฅ́дฅ̀●)");
  } else {
    taskModal.style.display = 'flex';
  }
});

closeTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
});
// 更新任务类型圆点颜色
const taskTypeSelect = document.getElementById('task-type');
const taskDot = document.getElementById('task-type-dot');

// 任务类型对应的颜色
const taskTypeColors = {
  '习惯养成': '#f7d26b', // 糖果浅黄
  '项目实施': '#f7b7d7', // 马卡龙粉
  '作业日常': '#c4b3d3'  // 丁香浅紫
};

// 初始化圆点颜色
taskDot.style.backgroundColor = taskTypeColors[taskTypeSelect.value];

// 监听任务类型选择，改变圆点颜色
taskTypeSelect.addEventListener('change', () => {
  taskDot.style.backgroundColor = taskTypeColors[taskTypeSelect.value];
});

confirmTaskBtn.addEventListener('click', () => {
  const taskName = document.getElementById('task-name').value;
  const taskType = document.getElementById('task-type').value;
  const taskNotes = document.getElementById('task-notes').value;

  if (taskName) {
    tasks.push({ name: taskName, type: taskType, notes: taskNotes });
    renderTasks();
    taskModal.style.display = 'none';
    document.getElementById('task-name').value = '';
    document.getElementById('task-notes').value = '';
  }
});

function renderTasks() {
  taskList.innerHTML = '';  // 清空任务列表

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.name;
    li.setAttribute('data-index', index);
    
    // 创建小圆点并设置颜色
    const dot = document.createElement('span');
    dot.classList.add('task-dot');
    
    // 根据任务类型设置小圆点颜色
    switch (task.type) {
      case '习惯养成':
        dot.style.backgroundColor = '#F9E4A2'; // 糖果浅黄
        break;
      case '项目实施':
        dot.style.backgroundColor = '#F5A7B7'; // 马卡龙粉
        break;
      case '作业日常':
        dot.style.backgroundColor = '#C9A8E6'; // 丁香浅紫
        break;
      default:
        dot.style.backgroundColor = 'black'; // 默认黑色
    }

    // 将小圆点添加到任务前面
    li.insertBefore(dot, li.firstChild); // 确保小圆点在任务名称前面

     // 如果任务已完成，添加删除线样式
     if (task.completed) {
      li.classList.add('completed'); // 添加已完成的任务样式
    }

    // 添加到任务列表
    taskList.appendChild(li);
  });

  //deleteTaskBtn.disabled = tasks.length === 0;
  //newTaskBtn.disabled = tasks.length >= 8;
}

taskList.addEventListener('contextmenu', (e) => {
  // 只处理任务列表项的右键点击事件
  if (e.target.tagName === 'LI') {
    e.preventDefault(); // 禁用右键菜单默认行为

    const task = e.target;
    task.classList.add('completed'); // 给任务添加完成的样式

    // 弹出提示
    showCustomAlert("休息一下吧૮꒰ ˶• ༝ •˶꒱ა");

    // 标记任务为已完成并添加删除线
    const taskIndex = task.getAttribute('data-index');
    tasks[taskIndex].completed = true; // 在任务对象中记录任务已完成

    renderTasks(); // 重新渲染任务列表以更新显示
  }
});


// 删除任务
deleteTaskBtn.addEventListener('click', () => {
  const selectedTask = taskList.querySelector('li.selected');
  if (selectedTask) {
    const index = selectedTask.getAttribute('data-index');
    tasks.splice(index, 1);
    renderTasks();
  }
  else {
    showCustomAlert("现在没有要做的事呀！(•́ ॣ·̫ ॣ•̀,)՞");
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') { 
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    }
    else{
    taskList.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
    e.target.classList.add('selected');
    deleteTaskBtn.disabled = false;
    }
    
  }
});


function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0'); // 补零
  const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零
  return `${hours}:${minutes}`;
}


// 计时器功能
let timerInterval;
let remainingTime = 0;
let timerValue = 25; // 默认计时器时间

const timerDisplay = document.getElementById('timer-display');
const decreaseTimeBtn = document.getElementById('decrease-time');
const increaseTimeBtn = document.getElementById('increase-time');
const startTimerBtn = document.getElementById('start-timer');
const timerModal = document.getElementById('timer-modal');
const closeTimerModal = document.getElementById('close-timer-modal');

// 减少时间
decreaseTimeBtn.addEventListener('click', () => {
  if (timerValue > 1) {
    timerValue--;
    timerDisplay.textContent = `${timerValue}:00`;
  }
});

// 增加时间
increaseTimeBtn.addEventListener('click', () => {
  timerValue++;
  timerDisplay.textContent = `${timerValue}:00`;
});

// 开始计时
startTimerBtn.addEventListener('click', () => {
  startTimer(timerValue * 60); // 将分钟转换为秒
});

// 关闭计时完成弹窗
closeTimerModal.addEventListener('click', () => {
  timerModal.style.display = 'none';
});

let isTimerRunning = false; // 添加一个标志位，用于检查计时器是否正在运行
startTimerBtn.addEventListener('click', function () {
   // 如果计时器正在运行，则直接返回
   if (isTimerRunning) {
    console.warn('计时器正在运行，请不要重复点击。');
    return;
  }

  // 设置标志位为 true，表示计时器正在运行
  isTimerRunning = true;

  // 清除之前的计时器
  clearInterval(timerInterval);
  
  // 记录计时开始的时间
  const startTime = new Date();

  // 将剩余时间设置为默认时间（秒）
  remainingTime = timerValue * 60; // 将分钟转为秒

  // 启动计时器
  timerInterval = setInterval(function () {
    remainingTime--;
    updateTimerDisplay();

    if (remainingTime <= 0) {
      clearInterval(timerInterval); // 清除计时器

      // 记录计时结束的时间
      const endTime = new Date();
      
      // 计算持续时间（秒）
      const durationInSeconds = Math.floor((endTime - startTime) / 1000);  // 时间差以秒为单位

      // 将持续时间转换为分钟，并调用 fillTimeline
      const durationInMinutes = Math.ceil(durationInSeconds / 60);

      // 获取计时开始的时间（格式化为 HH:MM）
      const startTimeFormatted = formatTime(startTime);

      // 调用 fillTimeline，传入开始时间和持续时间
      fillTimeline(startTimeFormatted, durationInMinutes);

      // 弹出计时完成的弹窗
      setTimeout(() => {
        showTimerCompleteModal();
      }, 500);
    }
  }, 1000);
});

// 辅助函数：将 Date 对象格式化为 HH:MM 字符串
function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0'); // 补零
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 补零
  return `${hours}:${minutes}`;
}

// 填充时间轴的逻辑
function fillTimeline(startTime, duration) {
  const timelineGrid = document.querySelector('.timeline-grid');
  
  // 解析开始时间，转换为小时和分钟
  const startHour = parseInt(startTime.split(':')[0]);
  const startMinute = parseInt(startTime.split(':')[1]);
  
  // 将开始时间转换为 5 分钟为单位的索引
  const startIndex = (startHour - 5) * 12 + Math.floor(startMinute / 5);
  
  // 计算需要填充的格子数，duration按5分钟单位计算
  const totalSlots = Math.ceil(duration / 5);
  
  // 填充格子
  for (let i = 0; i < totalSlots; i++) {
    const cellIndex = startIndex + i;
    if (timelineGrid.children[cellIndex]) {
      timelineGrid.children[cellIndex].style.backgroundColor = '#f3868c'; // 填充粉色
    } else {
      console.warn(`格子索引 ${cellIndex} 超出范围，无法填充。`);
    }
  }
}
  

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0'); // 补零
  const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零
  return `${hours}:${minutes}`;
}

// 更新计时器显示
function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// 显示计时完成弹窗
function showTimerCompleteModal() {
  timerModal.style.display = 'flex';
}

//计时完成弹窗的提交功能
document.getElementById('complete-task').addEventListener('click', () => {
  const actualTime = document.getElementById('actual-time').value;
  const thoughts = document.getElementById('thoughts').value;
  showCustomAlert("太棒鸟!!!(๑´ㅂ๑)");
  //timerModal.style.display = 'none';
});

document.getElementById('incomplete-task').addEventListener('click', () => {
  const actualTime = document.getElementById('actual-time').value;
  const thoughts = document.getElementById('thoughts').value;
  showCustomAlert("人之常情…(=′ー)");
  //timerModal.style.display = 'none';
});

function showCustomAlert(message, type) {
  const alertBox = document.createElement('div');
  alertBox.classList.add('custom-alert');
  alertBox.classList.add(type); // 根据类型选择背景颜色
  alertBox.textContent = message;

  // 插入到页面的顶部
  document.body.prepend(alertBox);

  // 2秒后自动消失
  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}

document.getElementById('submit-feedback').addEventListener('click', () => {
  const actualTime = document.getElementById('actual-time').value;
  const thoughts = document.getElementById('thoughts').value;

  if (actualTime) {
    showCustomAlert("反馈已提交！");
    timerModal.style.display = 'none';
    document.getElementById('actual-time').value = '';
    document.getElementById('thoughts').value = '';
  } else {
    showCustomAlert("请填写实际用时！");
  }
});

// // 时间轴显示功能
// function fillTimeline(startTime, duration) {
//   const timelineGrid = document.querySelector('.timeline-grid');
  
//   // 解析开始时间，转换为小时和分钟
//   const startHour = parseInt(startTime.split(':')[0]);
//   const startMinute = parseInt(startTime.split(':')[1]);
  
//   // 将开始时间转换为 5 分钟为单位的索引
//   // 假设时间轴从 5:00 开始，每小时 12 个格子
//   const startIndex = (startHour - 5) * 12 + Math.floor(startMinute / 5);
  
//   // 计算需要填充的格子数，duration按5分钟单位计算
//   const totalSlots = Math.ceil(duration / 5);
  
//   // 填充格子
//   for (let i = 0; i < totalSlots; i++) {
//     const cellIndex = startIndex + i;
//     if (timelineGrid.children[cellIndex]) {
//       timelineGrid.children[cellIndex].style.backgroundColor = '#f3868c'; // 填充粉色
//     } else {
//       console.warn(`格子索引 ${cellIndex} 超出范围，无法填充。`);
//     }
//   }
// }


// 在计时结束后调用
function showTimerCompleteModal() {
  timerModal.style.display = 'flex';
  const endTime = new Date();
  const startTime = new Date(endTime.getTime() - remainingTime * 1000);
  const startTimeString = `${startTime.getHours()}:${startTime.getMinutes().toString().padStart(2, '0')}`;
  // fillTimeline(startTimeString, timerValue * 60); // 填充时间轴
}




// 关键词提示弹窗优化
function showPromptModal(message) {
  // 检查是否已经存在弹窗，如果存在则移除
  const existingModal = document.getElementById('prompt-modal');
  if (existingModal) {
    document.body.removeChild(existingModal);
  }

  // 创建新的弹窗
  const promptModal = document.createElement('div');
  promptModal.id = 'prompt-modal';
  promptModal.className = 'modal';
  promptModal.innerHTML = `
    <div class="modal-content">
      <span class="close" id="close-prompt-modal">&times;</span>
      <p>${message}</p>
    </div>
  `;
  document.body.appendChild(promptModal);

  // 绑定关闭事件
  const closePromptModal = document.getElementById('close-prompt-modal');
  closePromptModal.addEventListener('click', () => {
    promptModal.style.display = 'none';
  });

  promptModal.style.display = 'flex';
}

// MEMO 关键词提示
document.getElementById('save-memo').addEventListener('click', () => {
  const memo = document.getElementById('memo-text').value;
  if (memo) {
    const memoItem = document.createElement('div');
    memoItem.textContent = memo;
    document.getElementById('memo-list').appendChild(memoItem);
    document.getElementById('memo-text').value = '';

    // 检查关键词并弹出提示
    const keyword = Object.keys(prompts).find(key => memo.includes(key));
    const promptList = prompts[keyword] || prompts.default;
    const randomPrompt = promptList[Math.floor(Math.random() * promptList.length)];
    showPromptModal(randomPrompt); // 显示美化后的提示弹窗
  }
});

// 日历生成
function generateCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarGrid = document.querySelector('.calendar-grid');

  calendarGrid.innerHTML = '';
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    dayElement.classList.add('calendar-day');

    if (date.toDateString() === today.toDateString()) {
      dayElement.classList.add('today');
    }

    calendarGrid.appendChild(dayElement);
  }
}

// 时间轴生成
function generateTimeline() {
  const timelineGrid = document.querySelector('.timeline-grid');
  timelineGrid.innerHTML = '';
  for (let i = 0; i < 12 * 19; i++) { // 19小时（5:00 - 24:00）
    const cell = document.createElement('div');
    cell.classList.add('timeline-cell');
    timelineGrid.appendChild(cell);
  }
}


// 可爱的碎碎念随机间隔时间弹窗
function showRandomThoughts() {
  const thoughts = [
    "盯——｜。・）",
    "不要走呀!!( #⌂´)/┌┛",
    "你在走神吗(｡•́︿•̀｡)",
    "努力一下就能休息啦！(๑˃ᴗ˂)ﻭ",
    "是不是该喝口水了呀？(｡•́‿•̀｡)",
    "嘿嘿，在想明天要做的事情呢~ (´∇ﾉ｀*)ノ",
    "做完了吗？可以陪我玩了吗｡ﾟ(ﾟ∩´﹏`∩ﾟ)ﾟ｡",
    "๐·°(৹˃̵﹏˂̵৹)°·๐",
    "看了……感人的电影……(ˊ̥̥̥̥̥ ³ ˋ̥̥̥̥̥)",
    "还在……吧？(｡•́︿•̀｡)",
    "下雨了…不开心(;﹏;)",
    "꒰⁎′̥̥̥ ⌑ ‵̥̥̥ ꒱"
    
  ];

  // 随机选择一个碎碎念
  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  showCustomAlert(randomThought);

  // 设定下一个随机间隔，间隔时间大于10分钟
  const nextInterval = Math.floor(Math.random() * 600000) + 600000; // 10~20分钟（600000毫秒 = 10分钟）
  
  // 设置下一个弹窗的时间
  setTimeout(showRandomThoughts, nextInterval);
}

// 初始化
generateCalendar();
generateTimeline();
showRandomThoughts();