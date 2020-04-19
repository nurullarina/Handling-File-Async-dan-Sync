

      $("#form").submit(tangani);//komentar bagian ini agar syncronous yang berjalan
      function tangani(e){
        //kalau fungsi serialize outputnya string dengan format x-www-form-urlencoded, contoh lihat di div result di atas
        var dataaction = $("#form").find("button[type=submit]:focus").attr("id");
        var strformencoded = $("#form").serialize();
        $("#result").text(strformencoded);
         //kalau pakai fungsi serializeArray outputnya array of record - contoh lihat di console
        var arrayform = $("#form").serializeArray();
        //console.log(arrayform);

        Foto_Formulir = $("#foto").prop('files')[0];
        console.log(Foto_Formulir);
        
        df = new FormData();
        df.append("foto", Foto_Formulir);    //otomatis dikenali php dengan $_FILES['fotoku']
        df.append("formulir", strformencoded);  //dikenali php dengan $_REQUEST['dataku']
        df.append("action", dataaction);    //dikenali php dengan $_REQUEST['action']
        $.ajax({
          url: "filetujuan.php",
          type: "POST",
          data: df,
          processData: false,
          contentType: false,
          success: function (result) {
             $("#result").html(result);
          }       
        });

       return false;
  }


