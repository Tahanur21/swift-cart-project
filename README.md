***Those are the question has been given ***

1) What is the difference between null and undefined?
2) What is the use of the map() function in JavaScript? How is it different from forEach()?
3) What is the difference between == and ===?
4) What is the significance of async/await in fetching API data?
5) Explain the concept of Scope in JavaScript (Global, Function, Block).

*** Answering those question one by one based on my understanding ***

1) What is the difference between null and undefined?
Ans :  undefined হলো যখন কোনো ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু মান দেওয়া হয়নি আর null হলো স্পষ্টভাবে ভেরিয়েবলকে খালি বা শূন্য করার জন্য ব্যবহার করা হয় undefined স্বয়ংক্রিয়ভাবে আসে কিন্তু null ব্যবহারকারী নিজে দিতে হয় |

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans:  map ফাংশন array এর প্রতিটি উপাদানের উপর কাজ করে এবং নতুন array তৈরি করে কিন্তু forEach শুধুমাত্র প্রতিটি উপাদান প্রক্রিয়াজাত করে কোনো নতুন array রিটার্ন করে না map ব্যবহার করে আমরা সহজে একটি নতুন মানের array পাই আর forEach ব্যবহার করি কেবল কাজ সম্পাদনের জন্য | 

3) What is the difference between == and ===?
Ans : == মানের সমতা চেক করে কিন্তু টাইপ পরীক্ষা করে না আর === মান ও টাইপ দুইই মিলিয়ে চেক করে == স্বয়ংক্রিয়ভাবে টাইপ কনভার্ট করতে পারে কিন্তু === কনভার্সন ছাড়া সরাসরি তুলনা করে |

4) What is the significance of async/await in fetching API data?
Ans : async ফাংশন বলে যে ফাংশনটি প্রমিস রিটার্ন করবে আর await ব্যবহার করলে প্রমিস resolve না হওয়া পর্যন্ত ফাংশন থেমে থাকে এটি কোডকে সহজ এবং সিঙ্ক্রোনাসের মতো পড়ার মতো করে তোলে ফলে API থেকে ডাটা আনা এবং handle করা অনেক সহজ হয়ে যায় | 

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans : scope হলো ভেরিয়েবল কোন অংশে অ্যাক্সেস করা যাবে তা নির্ধারণ করে global scope যেকোনো জায়গা থেকে অ্যাক্সেস করা যায় function scope শুধু ফাংশনের ভিতরে অ্যাক্সেস করা যায় আর block scope শুধু ব্লকের ভিতরে অ্যাক্সেস করা যায় var function scope দেয় আর let এবং const block scope দেয়