const app = require('../../../app');

const db = app.database();
const _ = db.command;

/**
 * 文档分享数 +1
 * @param event
 * @param context
 * @return {Promise<*>}
 */
exports.main = async (event, context) => {
  const { questionId } = event;
  if (!questionId) {
    return;
  }

  return await db
    .collection('question')
    .doc(questionId)
    .update({
      shareNum: _.inc(1),
      _updateTime: new Date(),
    });
};
