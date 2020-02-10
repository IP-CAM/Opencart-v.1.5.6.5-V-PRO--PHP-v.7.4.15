<?php if ($error_warning) { ?>
<div class="warning"><?php echo $error_warning; ?></div>
<?php } ?>
<?php if ($success) { ?>
<div class="success"><?php echo $success; ?></div>
<?php } ?>
<table class="list">
  <thead>
    <tr>
      <td class="left"><?php echo $column_date_added; ?></td>
      <td class="left"><?php echo $column_description; ?></td>
      <td class="right"><?php echo $column_amount; ?></td>
	  <td class="center">Debit / Credit</td>
	  <td class="center">Delete</td>
    </tr>
  </thead>
  <tbody>
    <?php if ($transactions) { ?>
    <?php foreach ($transactions as $transaction) { ?>
    <tr>
      <td class="left"><?php echo $transaction['date_added']; ?></td>
      <td class="left"><?php echo $transaction['description']; ?></td>
      <td class="right"><?php echo $transaction['amount']; ?></td>
	  <td class="center"><?php if($transaction['amount']<0){echo "Credit";} elseif($transaction['amount']>0){echo "Debit";}?></td>
	  <td class="center"><a id="delete-transaction" class="button" onclick="DeleteTransaction(<?php echo $transaction['id']; ?>);"><span>Delete</span></a></td>
    </tr>
    <?php } ?>
    <tr>
      <td colspan="2" class="right"><b><?php echo $text_balance; ?></b></td>
	  <td class="right"><b><?php echo $balance; ?></b></td>
      <td class="center"><b><?php if($balance<0){echo "Credit";} elseif($balance>0){echo "Debit";}?></b></td>
	  <td class="center"></td>
    </tr>
    <?php } else { ?>
    <tr>
      <td class="center" colspan="6"><?php echo $text_no_results; ?></td>
    </tr>
    <?php } ?>
  </tbody>
</table>
<div class="pagination"><?php echo $pagination; ?></div>
