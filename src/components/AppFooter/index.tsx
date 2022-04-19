import * as React from "react";
import { useTranslation } from "react-i18next";
import { Tag, Layout, Typography } from "antd";
import { GithubOutlined, HeartTwoTone } from "@ant-design/icons";
import QRCodeModal from "components/QRCode/Modal";
import { Theme, PreferencesContext } from "api/contexts/Preferences";
import { TwoToneColors } from "components/utils";

const { Text } = Typography;
const { Footer } = Layout;

export const DONATION_ACCOUNT =
  "ffd_3p1114twr7znfqarkx7dmg4ub5khxp3p4qkedpcr8t34n4xyori6ad9eg9ff";

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = React.useContext(PreferencesContext);

  const donateColor =
    theme === Theme.DARK ? TwoToneColors.DONATE_DARK : TwoToneColors.DONATE;

  return (
    <Footer style={{ textAlign: "center" }}>
      <div>
        <a
          href="https://github.com/running-coder/nanolooker"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubOutlined /> FeidaLooker
        </a>{" "}
        ©{new Date().getFullYear()}{" "}
        {t("footer.createdBy", { creator: "RunningCoder" })}
      </div>

      <QRCodeModal
        account={DONATION_ACCOUNT}
        header={<Text>{t("footer.donations.title")}</Text>}
      >
        <Tag
          color={donateColor}
          icon={<HeartTwoTone twoToneColor={donateColor} />}
          style={{ cursor: "pointer", marginTop: "6px" }}
        >
          {t("footer.donations.donate")}
        </Tag>
      </QRCodeModal>
    </Footer>
  );
};

export default AppFooter;
