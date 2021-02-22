<template>
  <Page>
    <StackLayout>
      <Label
        text="the text"
        height="50"
        :accessible="true"
        accessibilityLabel="hej 1"
        accessibilityValue="hej 2"
        accessibilityHint="hej 3"
        accessibilityIdentifier="hej 4"
        :accessibilityHidden="false"
        accessibilityRole="adjustable"
        accessibilityState="selected"
        a11y-state="polite"
      ></Label>
      <ListPicker
        height="200"
        :items="[1, 2, 3, 4, 5, 6, 7, 8, 9]"
        :accessible="true"
        accessibilityLabel="listpicker hej 1"
        accessibilityValue="istpicker hej 2"
        accessibilityHint="istpicker hej 3"
        accessibilityIdentifier="istpicker hej 4"
        :accessibilityHidden="false"
        accessibilityRole="adjustable"
        accessibilityState="selected"
        a11y-state="polite"
      ></ListPicker>
    </StackLayout>
  </Page>
</template>
