export interface LoginDto {
  email: string
  password: string
}

export interface LoginResponseDto {
  jwtToken: string
}
