import { useCallback, useState, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyle";
import { StyledComponets } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  /**
   * useMemo（変数のmemo化）
   */
  const temp = useMemo(() => 1 + 2, []);
  console.log(temp);

  const onChangeText = (event) => setText(event.target.value);

  const onClickOpen = () => setOpen(!open);

  /**
   * useCallback（関数のmemo化）
   * テキストを入力するたびにアロー関数が生成されていると判断される。
   * 故にpropsが変化している認識され、memo化したはずのChildAreaが再レンダリングされる。
   * 処理が変わらない場合は同じものを使いまわすことを指示するuseCallbackを使用。
   */
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponets />
      <Emotion />
      <br />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
