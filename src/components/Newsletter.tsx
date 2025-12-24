import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would connect to your backend
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100">
            Get weekly updates on new opportunities delivered straight to your inbox
          </p>
        </div>

        {subscribed ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white">
            ✓ Thank you for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
