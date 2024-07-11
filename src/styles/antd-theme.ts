import { ThemeConfig } from 'antd';

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#111827',
    colorTextDescription: '#f3f4f8',
    borderRadius: 8,
    fontSize: 14
  },
  components: {
    Button: {
      colorPrimary: '#111827',
      primaryShadow: 'none',
      colorLink: '#111827'
    },
    Radio: {
      colorBgContainer: 'transparent',
      colorText: '#f3f4f8',
      buttonSolidCheckedBg: '#111827',
      buttonSolidCheckedHoverBg: '#111827',
      buttonPaddingInline: 16,
      borderRadius: 40,
      colorBorder: '#212934'
    },
    Form: {
      itemMarginBottom: 8
    },
    Input: {
      addonBg: '#111827',
      colorBorder: '#111827',
      colorBgContainer: 'transparent',
      controlHeight: 36,
      colorErrorText: '#f3f4f8'
    },
    Select: {
      controlHeight: 36,
      colorBgContainer: 'transparent',
      colorBorder: '#111827',
      optionSelectedBg: '#11182720'
    }
  }
};
