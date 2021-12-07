import { FullText } from "./full-text";
import { Level } from "./level";
import { ShortText } from "./short-text";
import { Tuman } from "./tuman";
import { Types } from "./types";

export interface Message{
    id: number,
    caption:string,
    shortText:ShortText,
    fullText:FullText,
    types:Types,
    view:number,
    author:any,
    level:Level,
    date:Date,
    dateTime:Date,
    tuman:Tuman,
    hashtags:any,
    active:boolean,
    image:any
}