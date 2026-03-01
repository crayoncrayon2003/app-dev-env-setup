// バックエンド（FastAPI）へのアクセス先
// ブラウザからアクセスする場合は localhost を使用
const backendUrl = "http://localhost:8000";

// ボタン1: ヘルスチェック実行
async function healthCheck() {
    try {
        const response = await fetch(`${backendUrl}/health`);
        const data = await response.json();
        document.getElementById("healthResult").innerHTML = `
            <strong>ステータス:</strong> ${data.status}<br>
            <strong>時刻:</strong> ${data.time}
        `;
    } catch (error) {
        document.getElementById("healthResult").innerText = `エラー: ${error.message}`;
    }
}

// ボタン2: ハローワールド実行
async function helloWorld() {
    try {
        const response = await fetch(`${backendUrl}/hello`);
        const data = await response.json();
        document.getElementById("helloResult").innerHTML = `
            <strong>メッセージ:</strong> ${data.message}
        `;
    } catch (error) {
        document.getElementById("helloResult").innerText = `エラー: ${error.message}`;
    }
}

// ボタン3-1: msgにGET
async function getMessage() {
    try {
        const response = await fetch(`${backendUrl}/msg`);
        const data = await response.json();
        document.getElementById("message").innerText = data.message;
    } catch (error) {
        document.getElementById("message").innerText = `エラー: ${error.message}`;
    }
}

// ボタン3-2: msgにPOST
async function sendMessage() {
    try {
        const input = document.getElementById("inputMessage").value;
        if (!input) {
            alert("メッセージを入力してください");
            return;
        }
        await fetch(`${backendUrl}/msg`, {
            method: "POST",
            body: input
        });
              
        // 入力欄をクリア
        document.getElementById("inputMessage").value = "";
        
        // 送信完了メッセージを表示（オプション）
        alert("メッセージを送信しました。GETボタンを押して確認してください。");
    } catch (error) {
        alert(`エラー: ${error.message}`);
    }
}

// ボタン3-3: msgの表示をリセット
function resetDisplay() {
    document.getElementById("message").innerText = "（まだメッセージを取得していません）";
}

// ページ読み込み時の自動取得も削除
// getMessage();