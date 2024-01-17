import * as CryptoJS from "crypto-js";

interface EncryptProps {
  sha: number;
  text: string;
}

function Encrypt({ sha, text }: EncryptProps): JSX.Element {
  switch (sha) {
    case 0:
      return <p>Choose an algorithm</p>;
    case 1:
      const shaHash = CryptoJS.SHA1(text);
      return <p>{shaHash.toString(CryptoJS.enc.Hex)}</p>;
    case 3:
      const sha3Hash = CryptoJS.SHA3(text);
      return <p>{sha3Hash.toString(CryptoJS.enc.Hex)}</p>;
    case 224:
      const sha224Hash = CryptoJS.SHA224(text);
      return <p>{sha224Hash.toString(CryptoJS.enc.Hex)}</p>;
    case 256:
      const sha256Hash = CryptoJS.SHA256(text);
      return <p>{sha256Hash.toString(CryptoJS.enc.Hex)}</p>;
    case 384:
      const sha384Hash = CryptoJS.SHA384(text);
      return <p>{sha384Hash.toString(CryptoJS.enc.Hex)}</p>;
    case 512:
      const sha512Hash = CryptoJS.SHA512(text);
      return <p>{sha512Hash.toString(CryptoJS.enc.Hex)}</p>;
    default:
      return <p>Error</p>;
  }
}

export default Encrypt;
