<template>
  <div class="about">
    <h1>Contact</h1>
    <form name="contact" netlify>
        <!-- Name input-->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="name">Name</label>
          <div class="col-md-9">
            <input id="name" name="name" type="text" placeholder="Your name" class="form-control">
          </div>
        </div>

        <!-- Email input-->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="email">Your E-mail</label>
          <div class="col-md-9">
            <input id="email" name="email" type="text" placeholder="Your email" class="form-control">
          </div>
        </div>

        <!-- Message body -->
        <div class="form-group row">
          <label class="col-md-3 control-label" for="message">Your message</label>
          <div class="col-md-9">
            <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
          </div>
        </div>

        <!-- Form actions -->
        <div class="form-group row">
          <div class="offset-md-3 col-9">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
    </form>
  </div>
</template>
