import * as yup from 'yup'
export const formSchemas = yup.object().shape({
  userName: yup.string().required(),
  passWord: yup.string().min(4).max(15).required(),
})
