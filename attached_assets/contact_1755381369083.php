<?php include 'header.php'; ?>
<section class="container">
    <h2 class="section-title">Contact Us</h2>
    <form class="contact-form" method="post" action="/contact.php">
        <label>Name</label>
        <input type="text" name="name" required>
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Message</label>
        <textarea name="message" required></textarea>
        <button class="btn" type="submit">Send Message</button>
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        // NOTE: on most shared hosts mail() needs proper setup. For now we save to a file.
        $log = date('Y-m-d H:i:s') . " | $name <$email> | $message\n";
        file_put_contents(__DIR__ . '/messages.log', $log, FILE_APPEND);
        echo '<p class="text-center">Thanks! Your message was recorded.</p>';
    }
    ?>
</section>
<?php include 'footer.php'; ?>