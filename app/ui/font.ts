// 구글 폰트를 가져온다
import {Inter, Lusitana, Roboto_Mono} from 'next/font/google'

// Inter라는 폰트중에 latin 부분집합을 가져온다.
export const inter= Inter({subsets:["latin"]})
export const mono= Roboto_Mono({subsets:["latin"],display:"swap"})
export const lusitana= Lusitana({subsets:["latin"],weight:["400",'700']})
