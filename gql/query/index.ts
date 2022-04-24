import { QueryResolvers } from "../../generated/resolvers";
import { AuthenticationError } from "apollo-server";
export const numberSix:QueryResolvers[`numberSix`]=async(
	parent, args, context, info
)=>{
	console.log(context.token)
	//tokenが付与されていないときのエラーハンドリング
	if(!context.token){
		throw new AuthenticationError('トークンが付与されていません');
	}
	const number=6
	return number
}
export const numberSeven:QueryResolvers['numberSeven']=()=>{
	const number=7
	return number
}