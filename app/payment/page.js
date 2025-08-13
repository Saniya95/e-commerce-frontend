import PaymentPageWithSuspense from "./PaymentPageWithSuspense";

export default function Page() {
  return <PaymentPageWithSuspense />;
}
import PaymentPageWithSuspense from "./PaymentPageWithSuspense";

export default function Page() {
  return <PaymentPageWithSuspense />;
}
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#8f6690] to-[#b278a8] py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-4xl font-bold text-white">
              💳 Secure Payment
            </h1>
            <p className="text-lg text-white/80">
              Choose your preferred payment method
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky p-6 bg-white shadow-2xl rounded-2xl top-8">
                <h3 className="flex items-center mb-4 text-xl font-bold text-gray-800">
                  � Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Order ID:</span>
                    <span className="font-mono text-[#8f6690]">#{orderId}</span>
                  </div>
                  {orderDetails?.amount && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-bold text-green-600">
                        ₹{orderDetails.amount}
                      </span>
                    </div>
                  )}
                  <div className="pt-3 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-[#8f6690]">
                        ₹{orderDetails?.amount || 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white shadow-2xl rounded-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`relative cursor-pointer transition-all duration-300 ${
                          selected === method.id
                            ? "transform scale-[1.02]"
                            : "hover:transform hover:scale-[1.01]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="method"
                          value={method.id}
                          checked={selected === method.id}
                          onChange={() => setSelected(method.id)}
                          className="sr-only"
                          required
                        />
                        <div
                          className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                            selected === method.id
                              ? "border-[#8f6690] bg-gradient-to-r from-[#8f6690]/10 to-[#b278a8]/10 shadow-lg"
                              : "border-gray-200 hover:border-[#8f6690]/50 hover:bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="text-3xl">{method.icon}</div>
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-800">
                                {method.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {method.description}
                              </p>
                            </div>
                            <div
                              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                                selected === method.id
                                  ? "border-[#8f6690] bg-[#8f6690]"
                                  : "border-gray-300"
                              }`}
                            >
                              {selected === method.id && (
                                <div className="w-full h-full rounded-full bg-white scale-[0.4]"></div>
                              )}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={!selected || processingPayment}
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                        !selected || processingPayment
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-[#8f6690] to-[#b278a8] text-white hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                      }`}
                    >
                      {processingPayment ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <span>🔒</span>
                          <span>
                            {selected === "cod"
                              ? "Confirm Order"
                              : "Pay Securely"}
                          </span>
                        </div>
                      )}
                    </button>
                  </div>

                  <div className="pt-4 text-sm text-center text-gray-500">
                    <p className="flex items-center justify-center space-x-2">
                      <span>🔐</span>
                      <span>
                        Your payment information is secure and encrypted
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );

