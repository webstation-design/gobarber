import Notification from '../models/Notification';
import User from '../models/User';

class NotificationController {

  async index(req, res) {

    const checkUserProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!checkUserProvider) {
      return res.status(401).json({ error: 'Only provider can load notifications' });
    }

    const notifications = await Notification.findAll({
      where: { user: req.userId },
      order: [['created_at', 'DESC']],
      limit: 20
    });

    return res.json(notifications);

  }

  async update(req, res) {

    const notification = await Notification.findByPk(req.params.id);

    notification.update({ read: true });

    res.json(notification);

  }

}

export default new NotificationController();