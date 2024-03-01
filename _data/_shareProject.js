import { Vk, Copy } from 'src/components';

const _shareProject = [
  {
    value: 'copy',
    label: 'Скопировать ссылку',
    Component: Copy,
    color: '#fff',
    action: (close) => {
      navigator.clipboard.writeText(window.location.href);
      close();
    },
  },
  {
    value: 'vk',
    label: 'VK',
    Component: Vk,
    color: '#4a76a8',
    action: (close) => {
      window.open(`https://vk.com/share.php?url=${window.location.href}`, '_blank');
      close();
    },
  },
  {
    value: 'whatsapp',
    label: 'WhatsApp',
    icon: "logos:whatsapp-icon",
    color: '#25D366',
    action: (close) => {
      window.open(`https://api.whatsapp.com/send?text=${window.location.href}`, '_blank');
      close();
    },
  },
  {
    value: 'telegram',
    label: 'Telegram',
    icon: "logos:telegram",
    color: '#0088cc',
    action: (close) => {
      window.open(`https://t.me/share/url?url=${window.location.href}`, '_blank');
      close();
    },
  },
];

export default _shareProject