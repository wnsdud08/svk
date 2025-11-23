<script>
  let username = '';
  let password = '';
</script>

<form method="POST">
  <input name="username" bind:value={username} placeholder="아이디" />
  <input name="password" type="password" bind:value={password} placeholder="비밀번호" />
  <button type="submit">로그인</button>
</form>

{#if $page.form?.error}
  <p style="color:red;">{$page.form.error}</p>
{/if}