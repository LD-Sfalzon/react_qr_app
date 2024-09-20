import {QRCodeSVG} from 'qrcode.react';
import { withLDConsumer } from "launchdarkly-react-client-sdk";

//Change QRURL to the URL where you'll be hosting this app
const QRURL = "https://ld-sfalzon.github.io/react_qr_app/";

const qrCodeHome = ({ flags }) => {

    // The React SDK automatically converts flag keys with dashes and periods to camelCase.
    // See this page for details: https://docs.launchdarkly.com/sdk/client-side/react/react-web#flag-keys
    return flags.showQrCode ? (
    <div>
      <br />
      <span style={{ color: 'black' }}><center>Scan me!</center></span>
      <div className="qr-wrapper">
        <QRCodeSVG value={QRURL} 
          title={"Title for my QR Code"}
          size={256}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"}
          marginSize={0}
          imageSettings={{
            src: "https://avatars.githubusercontent.com/u/8039656",
            x: undefined,
            y: undefined,
            height: 88,
            width: 88,
            opacity: 1,
            excavate: true,
          }}
        
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);