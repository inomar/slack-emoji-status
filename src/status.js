const errorStatus = (errorMessage) => (
  { status_emoji: ':tornado:', status_text: errorMessage }
);

const emojiStatus = [
  {
    status_emoji: ':new_moon_with_face:',
    status_text: '察して。。。',
    over_task: 20,
  },
  {
    status_emoji: ':waxing_crescent_moon:',
    status_text: 'ちょっとまって。。。',
    over_task: 10,
  },
  {
    status_emoji: ':first_quarter_moon:',
    status_text: 'おっと。。。',
    over_task: 5,
  },
  {
    status_emoji: ':moon:',
    status_text: 'まだ大丈夫',
    over_task: 3,
  },
  {
    status_emoji: ':full_moon_with_face:',
    status_text: '余裕があるよ',
    over_task: 0,
  },
];

const currentEmojiStatus = (tasksCount) => (
  emojiStatus.find(status => tasksCount >= status.over_task)
);

module.exports = { errorStatus, currentEmojiStatus };
