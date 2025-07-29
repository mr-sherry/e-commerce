// lib/otpApi.ts

const BASE_URL = "https://ecommerce.codiea.io";

interface SendOtpPayload {
  email: string;
}

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export async function sendOtp(
  payload: SendOtpPayload
): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${BASE_URL}/api/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept-Language": "en" },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to send OTP");

  return res.json();
}

export async function verifyOtp(
  payload: VerifyOtpPayload
): Promise<{ success: boolean; token?: string; message?: string }> {
  const res = await fetch(`${BASE_URL}/api/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept-Language": "en" },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!res.ok) throw new Error("OTP verification failed");

  return res.json();
}

export async function register(
  payload: RegisterPayload
): Promise<{ success: boolean; message?: string; token?: string }> {
  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept-Language": "en" },
    body: JSON.stringify(payload),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Registration failed");

  return res.json();
}
