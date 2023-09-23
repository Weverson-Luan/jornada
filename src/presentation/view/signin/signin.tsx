/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/**
 * IMPORTS
 */
import React from 'react';
import { Image, ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

import { Box } from '@presentation/components/box/box';
import { Button } from '@presentation/components/button/button';
import { Input } from '@presentation/components/form/input/input';
import { Typography } from '@presentation/components/typography/typography';
import { useLoginViewModel } from '@presentation/view-model/user-login-view-model';
import { Formik } from 'formik';
// constants
import { IMAGES_JORNADA, SCREEN_LOGIN } from 'src/common/constants';

// schemas yup
import { userSchema, initialValues } from './schema';

// styles
import { Container } from './styles';

/**
 *
 * Screen signin JSX.
 */
const SigninView = () => {
  const theme = useTheme();
  const {
    isLoading,
    setOnFocusedCpf,
    onFocusedCpf,
    setOnFocusedPlate,
    onFocusedPlate,
    onSubmit,
    handleCloseApplication,
  } = useLoginViewModel();

  return (
    <Container>
      <Box
        width={'100%'}
        minHeight={'150px'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={12}
        marginBottom={34}
      >
        <Image
          source={IMAGES_JORNADA.LOGO}
          resizeMode='contain'
          style={{ width: 150, height: 150 }}
        />
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid, errors }) => (
          <>
            <Box
              width={'100%'}
              minHeight={'400px'}
              flexDirection='column'
              alignItems='flex-start'
              backgroundColor={theme.colors.neutral25}
              borderRadius={8}
              padding={16}
              marginBottom={40}
            >
              <Box
                width={'100%'}
                height={40}
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography
                  text={SCREEN_LOGIN.title_journey_control}
                  fontSize={18}
                  fontFamily='inter_semi_bold_600'
                  color={theme.colors.black180}
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </Box>

              <>
                <Box
                  width={'100%'}
                  height={'310px'}
                  backgroundColor={theme.colors.neutral25}
                  marginTop={30}
                >
                  <Input
                    name={'email'}
                    textLabel={SCREEN_LOGIN.tileLabelEMAIL}
                    width={'100%'}
                    height={'70px'}
                    backgroundColor={theme.colors.neutral25}
                    borderBottomWidth={theme.borderWidths.thin}
                    borderColor={onFocusedCpf ? theme.colors.blue500 : theme.colors.neutral200}
                    paddingLeft={theme.paddings.md}
                    paddingRight={theme.paddings.md}
                    placeholder='Digite seu E-MAIL'
                    placeholderTextColor={theme.colors.gray900}
                    keyboardType='default'
                    value={values.email}
                    messageError={errors?.email}
                    onChangeText={handleChange('email')}
                    onFocus={() => {
                      setOnFocusedCpf(true);
                    }}
                    onBlur={() => {
                      setOnFocusedCpf(false);
                      handleBlur('email');
                    }}
                  />

                  <Input
                    name={'password'}
                    textLabel={SCREEN_LOGIN.tilteLabelPassword}
                    width={'100%'}
                    height={'70px'}
                    backgroundColor={theme.colors.neutral25}
                    borderBottomWidth={theme.borderWidths.thin}
                    borderColor={onFocusedPlate ? theme.colors.blue500 : theme.colors.neutral200}
                    paddingLeft={theme.paddings.md}
                    paddingRight={theme.paddings.md}
                    placeholder='Digite sua SENHA '
                    placeholderTextColor={theme.colors.gray900}
                    value={values.password}
                    messageError={errors?.password}
                    onChangeText={handleChange('password')}
                    secureTextEntry={true}
                    onFocus={() => {
                      setOnFocusedPlate(true);
                    }}
                    onBlur={() => {
                      handleBlur('password');
                      setOnFocusedPlate(false);
                    }}
                  />
                </Box>
              </>
            </Box>
            <Box
              width={'100%'}
              height={'120px'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Button
                opacity={!isValid ? 0.5 : 10}
                width='100%'
                height={'45px'}
                backgroundColor={theme.colors.blue500}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={8}
                marginBottom={16}
                onPress={() => {
                  handleSubmit();
                }}
              >
                {isLoading ? (
                  <ActivityIndicator size={24} color={theme.colors.neutral25} />
                ) : (
                  <Typography
                    text={SCREEN_LOGIN.titleButtonLogin}
                    fontSize={theme.fontSizes.lg}
                    fontFamily='inter_semi_bold_600'
                    color={theme.colors.neutral25}
                    lineHeight={24}
                    letterSpacing={0.5}
                  />
                )}
              </Button>

              <Button
                width='100%'
                height={'45px'}
                backgroundColor={theme.colors.blue500}
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}
                borderRadius={8}
                onPress={() => {
                  handleCloseApplication();
                }}
              >
                <Typography
                  text={SCREEN_LOGIN.titleButtonExitApp}
                  fontSize={theme.fontSizes.lg}
                  fontFamily='inter_semi_bold_600'
                  color={theme.colors.neutral25}
                  lineHeight={24}
                  letterSpacing={0.5}
                />
              </Button>
            </Box>
          </>
        )}
      </Formik>
    </Container>
  );
};

/**
 * EXPORTS
 */
export { SigninView };
