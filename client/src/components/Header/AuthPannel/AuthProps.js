import { tr } from "../../../AppTranslate"
import { sanitizeTxt } from "../../../AppFunctions"


export const AuthProps = (lang, formData, setFormData, formErr, setFormErr)=>{
  return {
    login: {
      legend: tr(`LogInLegend`,lang),
      type: `text`,
      plhol: tr(`PlaceHolder`,lang),
      val: formData?.login ?? '',
      err: formErr?.login ?? '',
      cbVal: (val)=> setFormData( (prev) => ({
        ...prev, login:sanitizeTxt(val, `login`).sanText
      })),
      cbErr: (val)=> setFormErr( (prev) => ({
        ...prev, login:sanitizeTxt(val, `login`).sanErr
      }))
    },
    email: {
      legend: tr(`EmailLegend`,lang),
      type: `email`,
      plhol: tr(`PlaceHolder`,lang),
      val: formData?.email ?? '',
      err: formErr?.email ?? '',
      cbVal: (val)=> setFormData( (prev) => ({
        ...prev, email:sanitizeTxt(val, `email`).sanText
      })),
      cbErr: (val)=> setFormErr( (prev) => ({
        ...prev, email:sanitizeTxt(val, `email`).sanErr
      }))
    },
    pass: {
      legend: tr(`PassLegend`,lang),
      type: `password`,
      plhol: tr(`PlaceHolder`,lang),
      val: formData?.pass ?? '',
      err: formErr?.pass ?? '',
      cbVal: (val)=> setFormData( (prev) => ({
        ...prev, pass:sanitizeTxt(val, `pass`).sanText
      })),
      cbErr: (val)=> setFormErr( (prev) => ({
        ...prev, pass:sanitizeTxt(val, `pass`).sanErr
      }))
    },
    verify: {
      legend: tr(`VerifyLegend`,lang),
      type: `password`,
      plhol: tr(`PlaceHolder`,lang),
      val: formData?.verify ?? '',
      err: formErr?.verify ?? '',
      cbVal: (val)=> setFormData( (prev) => ({
        ...prev, verify:sanitizeTxt(val, `verify`).sanText
      })),
      cbErr: (val)=> setFormErr( (prev) => ({
        ...prev, verify:sanitizeTxt(val, `verify`).sanErr
      }))
    },
    confirm: {
      legend: tr(`ConfirmLegend`,lang),
      type: `text`,
      plhol: tr(`PlaceHolder`,lang),
      val: formData?.confirm ?? '',
      err: formErr?.confirm ?? '',
      cbVal: (val)=> setFormData( (prev) => ({
        ...prev, confirm:sanitizeTxt(val, `confirm`).sanText
      })),
      cbErr: (val)=> setFormErr( (prev) => ({
        ...prev, confirm:sanitizeTxt(val, `confirm`).sanErr
      }))
    }
  }
}