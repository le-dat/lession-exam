export const course1 = {
  id: 1,
  title: "Khái niệm Trí tuệ nhân tạo (AI)",
  description: "AI là khả năng máy tính thực hiện các công việc trí tuệ như con người.",
  duration: "2 tuần",
  students: 156,
  progress: 75,
  lessons: [
    {
      id: 1,
      title: "Khái niệm Trí tuệ nhân tạo (AI) ",
      duration: "45 phút",
      status: "published" as "published" | "draft",
      content: `
        Trí tuệ nhân tạo (AI) là khả năng của máy tính thực hiện các công việc mang tính trí tuệ như con người, nhằm xây dựng các phần mềm giúp máy tính có năng lực trí tuệ tương tự con người.

        ## Các đặc trưng của AI

        1. **Khả năng học**
          - Máy tính điều chỉnh hành vi dựa trên dữ liệu mới.
          - Ví dụ: Hệ thống khuyến nghị YouTube, thuật toán học máy.

        2. **Khả năng nhận thức**
          - Cảm nhận và hiểu biết môi trường qua cảm biến.
          - Ví dụ: Xe tự lái.

        3. **Khả năng suy luận**
          - Áp dụng logic và tri thức để đưa ra quyết định.
          - Ví dụ: Hệ thống chẩn đoán y tế.

        4. **Khả năng hiểu ngôn ngữ**
          - Xử lý ngôn ngữ tự nhiên.
          - Ví dụ: Công cụ tìm kiếm Google.

        5. **Khả năng giải quyết vấn đề**
          - Giúp tìm ra giải pháp cho các tình huống phức tạp.
          - Ví dụ: Hệ thống dự báo thời tiết.

        ## Phân loại AI

        1. **Trí tuệ nhân tạo hẹp**
          - Thiết kế để thực hiện một nhiệm vụ cụ thể.
          - Ví dụ: Chơi cờ, nhận dạng khuôn mặt.

        2. **Trí tuệ nhân tạo tổng quát**
          - Mục tiêu dài hạn với khả năng tự học và thực hiện nhiều công việc giống con người.
          - Hiện tại chưa đạt được.

        ## Các lĩnh vực nghiên cứu phát triển AI

        1. **Học máy (Machine Learning)**
          - Làm cho máy tính học từ dữ liệu thu được.

        2. **Xử lý ngôn ngữ tự nhiên (NLP)**
          - Phát triển các mô hình giao tiếp giữa người và máy qua văn bản, giọng nói.

        3. **Thị giác máy tính**
          - Phân tích hình ảnh, nhận dạng khuôn mặt, xe tự lái.

        4. **AI tạo sinh (Generative AI)**
          - Tạo ra văn bản, hình ảnh, âm thanh từ dữ liệu có sẵn.
          - Ví dụ: ChatGPT, DALL-E, Mubert.

        ## Ứng dụng AI trong đời sống

        1. **Y học**
          - Cải thiện chất lượng chẩn đoán, điều trị bệnh.
          - Ví dụ: IBM Watson for Oncology.

        2. **Giao thông**
          - Phát triển xe tự lái, quản lý giao thông thông minh.

        3. **Tài chính ngân hàng**
          - Tự động hóa phân tích dữ liệu, ngăn chặn gian lận.

        4. **Sản xuất**
          - Tối ưu hóa quy trình sản xuất, quản lý tài nguyên hiệu quả.

        5. **Giáo dục**
          - Nền tảng học tập trực tuyến, theo dõi tiến trình học tập.

        ## Ảnh hưởng của AI đến con người

        1. **Việc làm**
          - Nguy cơ mất việc làm do tự động hóa và AI thay thế.

        2. **An ninh**
          - Ứng dụng AI trong quân sự, nguy cơ tấn công mạng.

        3. **Bảo mật dữ liệu**
          - Rủi ro lạm dụng dữ liệu, cần minh bạch trong việc thu thập và sử dụng dữ liệu.

        AI đang trở thành một phần không thể thiếu trong cuộc sống hiện đại, mang lại nhiều cơ hội và thách thức.
        `,
    },
    // {
    //   id: 2,
    //   title: "Một số giao thức mạng thông dụng:",
    //   duration: "60 phút",
    //   status: "published" as "published" | "draft",
    //   content: "# Nội dung Components và Props...",
    // },
    // {
    //   id: 3,
    //   title: "State và Lifecycle",
    //   duration: "55 phút",
    //   status: "draft" as "published" | "draft",
    //   content: "# Nội dung State và Lifecycle...",
    // },
  ],
};

export const course2 = {
  id: 2,
  title: "Mạng máy tính và Internet",
  description: "Mạng máy tính kết nối các thiết bị để truyền và trao đổi dữ liệu.",
  duration: "2 tuần",
  students: 156,
  progress: 75,
  lessons: [
    {
      id: 1,
      title: "Khái niệm của mạng máy tính ",
      duration: "45 phút",
      status: "published" as "published" | "draft",
      content: ` Mạng máy tính là hệ thống các thiết bị số được kết nối với nhau để truyền dữ liệu và trao đổi thông tin, có thể kết nối bằng dây cáp mạng hoặc sóng vô tuyến.  

        ### Khái niệm cáp mạng, thiết bị đầu cuối  
        - **Cáp mạng**: Dây dẫn có vỏ bọc bảo vệ và bên trong là dây dẫn kim loại để truyền tín hiệu điện. Cáp quang sử dụng dây dẫn trong suốt để truyền tín hiệu ánh sáng.  
        - **Thiết bị đầu cuối**: Bao gồm máy tính cá nhân, điện thoại thông minh, máy tính bảng, máy in và các thiết bị trong mạng Internet như camera, đèn, tủ lạnh, cảm biến nhiệt độ…  

        ## Thiết bị mạng thông dụng  

        ### 1. Hub và Switch  
        - **Hub**: Hoạt động tại tầng vật lý, chuyển tiếp dữ liệu đến tất cả các thiết bị kết nối. Nguy cơ xung đột tín hiệu cao.  
        - **Switch**: Hoạt động tại tầng dữ liệu, chuyển tiếp dữ liệu chỉ đến thiết bị đích, giảm xung đột tín hiệu.  

        ### 2. Wireless Access Point (WAP)  
        - **Wi-Fi**: Truyền dữ liệu bằng sóng vô tuyến, phổ biến trong các mạng cục bộ.  
        - **WAP (Access Point)**: Bộ thu phát Wi-Fi kết nối thiết bị đầu cuối không dây, mở rộng phạm vi địa lý của mạng LAN.  

        ### 3. Router  
        - **Chức năng**: Dẫn đường cho dữ liệu khi kết nối Internet.  
        - **Ứng dụng**: Sử dụng khi kết nối hai máy tính qua Internet từ xa, yêu cầu dịch vụ của nhà cung cấp viễn thông.  

        ### 4. Modem  
        - **Chức năng**: Chuyển đổi tín hiệu số sang tín hiệu tương tự và ngược lại khi kết nối LAN với Internet.  
        - **Các loại modem**: Modem quay số, ADSL, quang, GSM 3G…  
        `,
    },
    // {
    //   id: 2,
    //   title: "Một số giao thức mạng thông dụng:",
    //   duration: "60 phút",
    //   status: "published" as "published" | "draft",
    //   content: "# Nội dung Components và Props...",
    // },
    // {
    //   id: 3,
    //   title: "State và Lifecycle",
    //   duration: "55 phút",
    //   status: "draft" as "published" | "draft",
    //   content: "# Nội dung State và Lifecycle...",
    // },
  ],
};

export const course3 = {
  id: 3,
  title: "Giữ gìn tính nhân văn trong thế giới ảo",
  description: "Giao tiếp qua mạng kết nối mọi người nhanh chóng, tiện lợi.",
  duration: "2 tuần",
  students: 156,
  progress: 75,
  lessons: [
    {
      id: 1,
      title: "Giữ gìn tính nhân văn trong thế giới ảo",
      duration: "45 phút",
      status: "published" as "published" | "draft",
      content: ` 
        ## Ưu điểm của giao tiếp trong không gian mạng  
        Giao tiếp qua không gian mạng sử dụng các phương tiện kỹ thuật số như email, mạng xã hội và chat trực tuyến để kết nối mọi người nhanh chóng và tiện lợi, không bị giới hạn bởi thời gian và khoảng cách.  

        ### Các ưu điểm chính:  
        - **Không phụ thuộc vào thời gian và địa điểm**: Có thể diễn ra mọi lúc, mọi nơi mà không cần hai bên cùng có mặt.  
        - **Cho phép nhiều người cùng tham gia**: Hữu ích cho các cuộc họp trực tuyến với số lượng lớn người ở nhiều địa điểm khác nhau.  
        - **Lưu trữ thông tin thuận lợi**: Nội dung trò chuyện có thể lưu lại để tham khảo sau này, tiết kiệm thời gian và công sức.  
        - **Giảm rào cản giao tiếp ban đầu**: Giúp học sinh nhút nhát hoặc người bình thường dễ dàng giao tiếp với thầy cô, lãnh đạo cấp cao, người nổi tiếng.  
        - **Hỗ trợ người khuyết tật**: Giúp người khiếm khuyết ngoại hình, khiếm thính hoặc khiếm ngôn giao tiếp mà không cần người hỗ trợ.  

        ## Hạn chế của giao tiếp trong không gian mạng  
        Giao tiếp qua không gian mạng mất đi nhiều ưu điểm của giao tiếp trực tiếp và có thể gây ra một số vấn đề:  

        ### Các hạn chế chính:  
        - **Thiếu ngôn ngữ hình thể và tín hiệu cảm xúc**: Dễ xảy ra hiểu lầm do diễn giải sai ý nghĩa lời văn, ví dụ một trò đùa có thể bị hiểu nhầm là nghiêm túc.  
        - **Kỹ năng viết kém**: Dễ dãi khi viết tin nhắn dẫn đến sai chính tả, ngữ pháp và lạm dụng từ viết tắt.  
        - **Lười biếng**: Lạm dụng công nghệ, như nhắn tin cho người trong cùng phòng thay vì trò chuyện trực tiếp.  
        - **Nguy cơ nghiện Internet**: Ít trải nghiệm cuộc sống thực, giao tiếp ngây ngô và khó hòa nhập cộng đồng.  
        - **Nguy cơ rình rập, quấy rối, bắt nạt**: Các vấn đề an ninh cá nhân và sự quấy rối trên mạng.  
        - **Rủi ro về thông tin cá nhân**: Nguy cơ bị lộ thông tin cá nhân, cần quản lý kỹ thuật chặt chẽ để đảm bảo an toàn.  

        ## Ứng xử văn hóa trong không gian mạng  

        ### Các nguyên tắc ứng xử nhân văn:  
        - **Không mạo danh**: Không giả làm người khác vì bất kỳ mục đích nào.  
        - **Không tiếp tay cho kẻ xấu**: Không phát tán nội dung bắt nạt, quấy rối; phản đối và phê phán hành vi này.  
        - **Cảnh giác trước lừa đảo**: Tránh các chiêu trò lừa đảo như nhử mồi (baiting) và deepfake.  

        ### Các giá trị nhân văn cần thể hiện:  
        - **Đồng cảm**: Chia sẻ khi biết tin về thiên tai, thảm họa gây thiệt hại.  
        - **Ủng hộ và ca ngợi**: Đánh giá cao và ca ngợi người tốt, việc tốt.  
        - **Phản đối và phê phán**: Thể hiện sự không đồng tình với những hành vi tiêu cực.  

        ### Hành động vì giá trị nhân văn:  
        - **Vận động và tham gia ủng hộ**: Hỗ trợ đồng bào bị thiệt hại về tài sản hoặc tính mạng.  
        - **Ca ngợi người tốt, việc tốt**: Đưa tin chân thực, ca ngợi các hành động tích cực.  
        - **Phê phán tiêu cực**: Phát hiện và phê phán sự việc tiêu cực một cách có văn hóa và đạo đức.  
        `,
    },
  ],
};
export const courses = [course1, course2, course3];