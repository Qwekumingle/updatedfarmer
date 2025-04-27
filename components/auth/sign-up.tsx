'use client';

import { useConnect, useDisconnect } from '@thirdweb-dev/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SignUp() {
  const connect = useConnect();
  const disconnect = useDisconnect();
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const wallet = await connect();
      if (wallet) {
        // Here you would typically create a user profile in your database
        // For now, we'll just redirect to the dashboard
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Create Account</h2>
          <p className="mt-2 text-gray-600">Join our marketplace</p>
        </div>

        <div className="mt-8 space-y-6">
          <Button
            onClick={handleSignUp}
            className="w-full py-6 text-lg"
            variant="default"
          >
            Connect Wallet
          </Button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-blue-600 hover:underline">
              Sign in
            </a>
          </p>

          <p className="text-sm text-center text-gray-600">
            By connecting your wallet, you agree to our{' '}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 