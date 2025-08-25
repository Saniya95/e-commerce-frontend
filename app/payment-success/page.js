"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaymentSuccessRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get orderId from URL params
    const orderId = searchParams.get("orderId");

    // Redirect to the new order-success page
    if (orderId) {
      router.replace(`/order-success?orderId=${orderId}`);
    } else {
      // If no orderId, go to general order success
      router.replace("/order-success");
    }
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a1a2e] via-[#3d1a2e] to-[#1a0f1f] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff6b9d]"></div>
    </div>
  );
}
