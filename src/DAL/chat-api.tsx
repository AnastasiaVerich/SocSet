export type MessagesType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type StatusType='ready' | "pending" | 'error'
type EventName='message-received'| 'statusChanget'

type MessagesReceivedSubscriberType = (mes: MessagesType[]) => void
type StatusChangedSubscriberType = (st: StatusType) => void

let subscribes ={
    'message-received':[]as MessagesReceivedSubscriberType[],
    'statusChanget':[]as StatusChangedSubscriberType[],
}

let ws: WebSocket | null = null;

let messagesHandler = (e: MessageEvent) => {
    subscribes['message-received'].forEach(s => s(JSON.parse(e.data)))
}
let openHandler = () => {
    subscribes['statusChanget'].forEach(s=>s('ready'))
}
let errorHandler = () => {
    subscribes['statusChanget'].forEach(s=>s('error'))
    console.log("Error, restart page!")
}

const closeHandler = () => {
    console.log("close 23 min");
    subscribes['statusChanget'].forEach(s=>s('pending'))
    setTimeout(createChanel, 3000)
}

const cleanUp=()=>{
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messagesHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)

}

function createChanel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
    subscribes['statusChanget'].forEach(s=>s('pending'))
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messagesHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatAPI = {
    subscribe(event:EventName, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribes[event].push(callback);
        return () => {
            // @ts-ignore
            subscribes[event] = subscribes[event].filter(s => s !== callback)
        }
    },
    unsubscribe(event:EventName,callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribes[event] = subscribes[event].filter(s => s !== callback)
    },
    sendMessages(message: string) {
        ws?.send(message)
    },
    start() {
        createChanel()
    },
    stop() {
        subscribes['message-received'] = []
        subscribes['statusChanget'] = []
        ws?.close()
        cleanUp()
    },
}

