export type MessagesType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type subscribeType = (mes: MessagesType[]) => void
let subscribes = [] as subscribeType[]

let ws: WebSocket | null = null;

let messagesHandler = (e: MessageEvent) => {
    subscribes.forEach(s => s(JSON.parse(e.data)))
}

const closeHandler = () => {
    console.log("close 23 min");
    setTimeout(createChanel, 3000)
}

function createChanel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messagesHandler)
}

export const chatAPI = {
    subscribe(callback: subscribeType) {
        subscribes.push(callback);
        return () => {
            subscribes = subscribes.filter(s => s !== callback)
        }
    },
    unsubscribe(callback: subscribeType) {
        subscribes = subscribes.filter(s => s !== callback)
    },
    sendMessages(message: string) {
        ws?.send(message)
    },
    start() {
        createChanel()
    },
    stop() {
        subscribes = []
        ws?.close()
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messagesHandler)
    },
}

