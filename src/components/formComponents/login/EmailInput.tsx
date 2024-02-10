import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const EmailInput = () => {
  const {
    register,
    watch,
    control,
    resetField,
    formState: { errors },
  } = useFormContext();

  const handleClickClearEmail = () => {
    resetField('email');
  };
  const handleMouseDownEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login__item login__email">
        <label>Электронная почта</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={Boolean(errors?.email)}
              variant="outlined"
              {...register('email')}
              type="text"
              placeholder="example@mail.ru"
              sx={{
                '& fieldset': {
                  border: '0px solid #000',
                  borderRadius: '12px',
                },
                '& .Mui-error fieldset': { border: '1px solid #F46666' },
                '& .MuiInputBase-formControl': {
                  borderRadius: '12px',
                  fontFamily: 'Gilroy, sans-serif',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1px!important',
                  borderColor: '#000!important',
                },
                '& .Mui-focused .err-input': {
                  display: 'none',
                },
                '& .Mui-focused .btn-clear-input': {
                  display: 'inline-flex',
                },
                '& .Mui-focused': {
                  background: '#fff',
                },
                background: '#f2f3f4',
                borderRadius: '12px',
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ paddingRight: '6px' }}>
                    {errors?.email && (
                      <svg
                        className="err-input"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_9431_598)">
                          <path
                            d="M14.9998 4.99985C14.8436 4.84362 14.6317 4.75586 14.4107 4.75586C14.1897 4.75586 13.9778 4.84362 13.8215 4.99985L9.99985 8.82152L6.17818 4.99985C6.02191 4.84362 5.80998 4.75586 5.58901 4.75586C5.36804 4.75586 5.15612 4.84362 4.99985 4.99985C4.84362 5.15612 4.75586 5.36804 4.75586 5.58901C4.75586 5.80998 4.84362 6.02191 4.99985 6.17818L8.82152 9.99985L4.99985 13.8215C4.84362 13.9778 4.75586 14.1897 4.75586 14.4107C4.75586 14.6317 4.84362 14.8436 4.99985 14.9998C5.15612 15.1561 5.36804 15.2438 5.58901 15.2438C5.80998 15.2438 6.02191 15.1561 6.17818 14.9998L9.99985 11.1782L13.8215 14.9998C13.9778 15.1561 14.1897 15.2438 14.4107 15.2438C14.6317 15.2438 14.8436 15.1561 14.9998 14.9998C15.1561 14.8436 15.2438 14.6317 15.2438 14.4107C15.2438 14.1897 15.1561 13.9778 14.9998 13.8215L11.1782 9.99985L14.9998 6.17818C15.1561 6.02191 15.2438 5.80998 15.2438 5.58901C15.2438 5.36804 15.1561 5.15612 14.9998 4.99985Z"
                            fill="#F46666"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_9431_598">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                    {watch('email') && (
                      <IconButton
                        className="btn-clear-input"
                        onClick={handleClickClearEmail}
                        onMouseDown={handleMouseDownEmail}
                        edge="end"
                        sx={{ marginRight: '0', padding: '0', display: 'none' }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_9431_598)">
                            <path
                              d="M14.9998 4.99985C14.8436 4.84362 14.6317 4.75586 14.4107 4.75586C14.1897 4.75586 13.9778 4.84362 13.8215 4.99985L9.99985 8.82152L6.17818 4.99985C6.02191 4.84362 5.80998 4.75586 5.58901 4.75586C5.36804 4.75586 5.15612 4.84362 4.99985 4.99985C4.84362 5.15612 4.75586 5.36804 4.75586 5.58901C4.75586 5.80998 4.84362 6.02191 4.99985 6.17818L8.82152 9.99985L4.99985 13.8215C4.84362 13.9778 4.75586 14.1897 4.75586 14.4107C4.75586 14.6317 4.84362 14.8436 4.99985 14.9998C5.15612 15.1561 5.36804 15.2438 5.58901 15.2438C5.80998 15.2438 6.02191 15.1561 6.17818 14.9998L9.99985 11.1782L13.8215 14.9998C13.9778 15.1561 14.1897 15.2438 14.4107 15.2438C14.6317 15.2438 14.8436 15.1561 14.9998 14.9998C15.1561 14.8436 15.2438 14.6317 15.2438 14.4107C15.2438 14.1897 15.1561 13.9778 14.9998 13.8215L11.1782 9.99985L14.9998 6.17818C15.1561 6.02191 15.2438 5.80998 15.2438 5.58901C15.2438 5.36804 15.1561 5.15612 14.9998 4.99985Z"
                              fill="#0B1332"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_9431_598">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <div className="text-error">
          <>{errors?.email && errors?.email?.message}</>
        </div>
      </div>
    </>
  );
};
