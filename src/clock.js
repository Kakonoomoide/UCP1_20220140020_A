$(document).ready(function() {
    // Fungsi untuk mendapatkan kalimat salam berdasarkan waktu
    function getGreeting() {
      const currentTime = moment();
      const currentHour = currentTime.hour();
  
      if (currentHour < 12) {
        return "Selamat pagi!";
      } else if (currentHour < 18) {
        return "Selamat siang!";
      } else {
        return "Selamat malam!";
      }
    }
  
    // Fungsi untuk mengupdate kalimat salam, tanggal, dan jam setiap detik
    function updateDateTime() {
      const greeting = getGreeting();
      const datetime = moment().format("dddd, DD MMMM YYYY, HH:mm:ss");
  
      // Update teks pada elemen HTML
      $("#greeting").text(greeting);
      $("#datetime").text(datetime);
    }
  
    // Panggil fungsi updateDateTime() saat halaman pertama kali dimuat
    updateDateTime();
  
    // Panggil fungsi updateDateTime() setiap detik
    setInterval(updateDateTime, 1000);
  });
  