document.addEventListener("DOMContentLoaded", function () {
    // Chuyển đổi chế độ tối
    const toggleThemeButton = document.getElementById('toggle-theme');
    toggleThemeButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Animation cho các thanh kỹ năng
    const techSkillBar = document.querySelector('.tech-skill');
    const softSkillBar = document.querySelector('.soft-skill');

    setTimeout(() => {
        techSkillBar.style.width = '90%';
        softSkillBar.style.width = '75%';
    }, 500); // Độ trễ để bắt đầu animation

    // Mã jQuery cho hiệu ứng hình ảnh khi rê chuột vào
    $(function() {	
        // Sự kiện mouseover để tạo và hiển thị ảnh xem trước
        $('figure img').on('mouseover', function(e) {
            // Xây dựng tên tệp xem trước dựa trên hình ảnh hiện có
            var alt = $(this).attr('alt');
            var src = $(this).attr('src');								
            var newsrc = src.replace("small", "medium");

            // Tạo phần tử động với ảnh xem trước lớn hơn và chú thích
            var preview = $('<div id="preview"></div>');
            var image = $('<img src="' + newsrc + '">');
            var caption = $('<p>' + alt + '</p>');
            preview.append(image);
            preview.append(caption);
            $('body').append(preview);

            // Làm hình ảnh nhỏ trở nên xám và làm mờ dần hình ảnh xem trước
            $(this).addClass("gray");
            $("#preview").fadeIn(1000);										
        });	

        // Sự kiện mouseleave để loại bỏ hình ảnh xem trước và đặt lại hình ảnh
        $('figure img').on('mouseleave', removePreview);

        // Sự kiện mousemove để di chuyển hình ảnh xem trước dựa trên tọa độ chuột
        $('figure img').on('mousemove', movePreview);
    });

    // Hàm để loại bỏ hình ảnh xem trước và lớp gray
    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }		

    // Hàm để di chuyển hình ảnh xem trước dựa trên tọa độ chuột
    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }
});
// newcode.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-menu a');
    const contentDiv = document.querySelector('.content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            fetch(page)
                .then(response => response.text())
                .then(data => {
                    contentDiv.innerHTML = data;
                })
                .catch(error => console.error('Error loading page:', error));
        });
    });
});

