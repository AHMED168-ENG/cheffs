import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import { Box, IconButton, InputAdornment, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import LoadingButton from '@mui/lab/LoadingButton'
import { useForgotPassword } from '../../../hooks/react-query/config/forgot-password/useForgotPassword'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import { onErrorResponse } from '../../ErrorResponse'
import FormControl from '@mui/material/FormControl'
import { CustomSigninOutLine } from '../sign-in'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { alpha } from '@material-ui/core'
const ForgotPasswordNumberForm = ({ data, goNext, handleFirstForm }) => {
    const { t } = useTranslation()
    const { global, token } = useSelector((state) => state.globalSettings)
    const emailFormik = useFormik({
        initialValues: {
            email: data ? data.email : '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required(t('Please give a email number'))
                .min(10, 'number must be 10 digits'),
        }),
        onSubmit: async (values, helpers) => {
            try {
                formSubmitHandler(values)
            } catch (err) {}
        },
    })

    const onSuccessHandler = (res) => {
        if (res) {
            goNext()
            toast.success(res.message)
        }
    }

    const { mutate, isLoading } = useForgotPassword({
        onSuccessHandler,
        onError: (errors) => {
            onErrorResponse(errors)
        },
    })
    const formSubmitHandler = (values) => {
        handleFirstForm(values)
        mutate(values, {
            onSuccess: onSuccessHandler,
            onError: onErrorResponse,
        })
    }
    const handleOnChange = (value) => {
        emailFormik.setFieldValue('email', `+${value}`)
    }
    
    const [showEmail, setShowEmail] = useState(false)

    let userDatafor = undefined
    if (typeof window !== 'undefined') {
        userDatafor = JSON.parse(localStorage.getItem('userDatafor'))
    }

    
    return (
        <Box>
            <CustomStackFullWidth>
                <Stack>
                    <Typography>
                        {t('Please enter your register Mobile Number')}
                    </Typography>
                </Stack>
                <Stack mt="2rem" padding="0 20px">
                    <form onSubmit={emailFormik.handleSubmit}>
                    <CustomStackFullWidth>
                        <FormControl
                            variant="outlined"
                            fullWidth
                        >
                            <InputLabel
                                required
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[600],
                                    fontSize:"14px"

                                }}
                                htmlFor="outlined-adornment-email"
                            >
                                {t('email')}
                            </InputLabel>
                            <CustomSigninOutLine

                                required
                                type={
                                    showEmail ? 'text' : 'email'
                                }
                                id="email"
                                name="email"
                                placeholder={t("Enter your email")}
                                value={emailFormik.values.email}
                                onChange={emailFormik.handleChange}
                                error={
                                    emailFormik.touched.email &&
                                    Boolean(emailFormik.errors.email)
                                }
                                helperText={
                                    emailFormik.touched.email &&
                                    emailFormik.errors.email
                                }
                                touched={emailFormik.touched.email}
                                endAdornment={
                                    <InputAdornment position="end" >
                                    </InputAdornment>
                                }
                                startAdornment={ <InputAdornment position="start" sx={{marginInlineEnd:"0px !important"}}>
                                    <IconButton
                                        aria-label="toggle email visibility"

                                        edge="start"
                                    >
                                    </IconButton>
                                </InputAdornment>}
                                label="email"
                            />
                            {emailFormik.errors.email && (
                                <CustomTypography
                                    variant="subtitle2"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.error.main,
                                    }}
                                >
                                    {emailFormik.errors.email}
                                </CustomTypography>
                            )}
                        </FormControl>
                        </CustomStackFullWidth>

                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            loading={isLoading}
                        >
                            {t('Next')}
                        </LoadingButton>
                    </form>
                </Stack>
            </CustomStackFullWidth>
        </Box>
    )
}
export default ForgotPasswordNumberForm
