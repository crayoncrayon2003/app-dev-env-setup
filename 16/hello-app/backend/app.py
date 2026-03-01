from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# メモリ上で保持するメッセージ
save_message = "これはデフォルトのメッセージです！"


@app.get("/health")
def health_check():
    """
    クライアントが、この REST API サーバに対して
    HTTP メソッド GET で /health にアクセスしたとき、
    サーバの健康状態と現在時刻を返却する
    """
    return {
        "status": "ok",
        "time": datetime.now().isoformat()
    }


@app.get("/hello")
def hello():
    """
    クライアントが、この REST API サーバに対して
    HTTP メソッド GET で /hello にアクセスしたとき、
    固定メッセージ「Hello World」を返却する
    """
    return {
        "message": "Hello World"
    }


@app.get("/msg")
def get_message():
    """
    クライアントが、この REST API サーバに対して
    HTTP メソッド GET で /msg にアクセスしたとき、
    現在サーバが記憶しているメッセージを返却する
    """
    return {
        "message": save_message
    }


@app.post("/msg")
async def set_message(request: Request):
    """
    クライアントが、この REST API サーバに対して
    HTTP メソッド POST で /msg にアクセスしたとき、
    リクエスト本文として送信された文字列を
    サーバ側に保存する
    """
    global save_message
    body = await request.body()
    save_message = body.decode("utf-8")
    return {
        "message": save_message
    }
