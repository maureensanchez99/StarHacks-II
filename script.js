<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCUIzaDMYxC823OA1A247sOUzNlVJ4goLM",
    authDomain: "starhacks-ii.firebaseapp.com",
    projectId: "starhacks-ii",
    storageBucket: "starhacks-ii.appspot.com",
    messagingSenderId: "343896327372",
    appId: "1:343896327372:web:3570df5c6c034f442d6e69",
    measurementId: "G-Y6PHDH220F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
